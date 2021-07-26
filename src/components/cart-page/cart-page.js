import { Container } from 'react-bootstrap';
import { PageHeader } from '../header';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import Spinner from '../spinner';
import { ModalAfterOrder } from '../responses';
import { OrderForm } from '../forms';
import React, { lazy, Suspense, useState, useCallback } from 'react'
import { setLoading, setError, setFormVisibility, setModalVisibility } from '../../actions';

const CartEmpty = lazy(() => import('./cart-empty'))
const CartList = lazy(() => import('./cart-list'))
const ErrorComponent = lazy(() => import('../error'))

const CartPage = ({ RestoService, cart, error, loading, modalIsShown, formIsOpen, setModalVisibility, setLoading, setError, setFormVisibility, }) => {

    const title = cart.length > 0 ? 'Cart' : 'Your cart is empty'
    const descr = cart.length > 0 ? 'Order our bests which we fresshly made for you' : 'Looks like you havent added anything to your cart yet'

    const [customersData, setCustomersData] = useState(null)

    const setCustomer = (data) => {
        setLoading(true)
        setCustomersData(data)
        setFormVisibility()
        sendOrder(data)
    }

    const sendOrder = useCallback((data) => {
        RestoService.setOrder(generateOrder(cart), data)
            .catch(error => setError(error))
        setModalVisibility()
        setLoading(false)
    }, [customersData])


    return (
        <>
            <PageHeader title={title} descr={descr} />

            <Suspense fallback={<Spinner />}>

                <Container className='cart-list'>

                    {cart.length === 0 && <CartEmpty />}

                    {error && <ErrorComponent /> && !loading}
                    {loading && <Spinner /> && !error}

                    {cart.length > 0 && !error && !loading &&
                        <CartList customersData={customersData} />
                    }

                    {
                        formIsOpen &&
                        <OrderForm
                            setCustomer={setCustomer}
                        />
                    }

                    <ModalAfterOrder
                        modalIsShown={modalIsShown}
                        setModalVisibility={setModalVisibility}
                    />

                </Container>
            </Suspense>
        </>
    )
}

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            count: item.count,
        }
    })
    return newOrder
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        cart: state.cart,
        formIsOpen: state.formIsOpen,
        modalIsShown: state.modalIsShown
    }
}

const mapDispatchToProps = {
    setFormVisibility, setLoading, setError, setModalVisibility
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartPage))
