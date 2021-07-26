import { Col, Row, Container } from 'react-bootstrap';
import Spinner from '../../spinner';
import React, { lazy, useState, useCallback } from 'react'; 
import CartItem from '../cart-item';
import { ModalAfterOrder } from '../../responses';
import { OrderForm } from '../../forms';
import { connect } from 'react-redux';
import WithRestoService from '../../hoc';
import { setLoading, setError, addToCart, setFormVisibility, setModalVisibility, deleteFromCart, decCount } from '../../../actions';

const CartEmpty = lazy(() => import('../cart-empty'))

const CartList = ({ RestoService, cart, setModalVisibility, setError, loading, error, modalIsShown, cartTotalPrice, addToCart, deleteFromCart, decCount, setFormVisibility, formIsOpen }) => {

    const [customersData, setCustomersData] = useState(null)


    const setCustomer = (data) => {
        setLoading(true)
        setCustomersData(data)
        setFormVisibility()
        sendOrder(data)
    }

    const sendOrder = useCallback(() => {
        RestoService.setOrder(generateOrder(cart), customersData)
            .catch(error => setError(error))
        setModalVisibility()
        setLoading(false)
    }, [customersData, RestoService, setModalVisibility, setError, cart])


    return (

        <Container className='cart-list'>

            {cart.length === 0 && <CartEmpty />}

            {loading && <Spinner /> && !error}

            {cart.length > 0 && !error && !loading &&
                <Col className='cart-items-list '>

                    <Row >
                        <h1>Your order:</h1>
                    </Row>

                    {cart != null && cart.length > 0 && cart.map(cartItem => {
                        return (
                            <CartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                                addToCart={addToCart}
                                decCount={decCount}
                                deleteFromCart={deleteFromCart}
                            />
                        )
                    })}

                    <Row className='row total-order-price' lg={{ span: 10, offset: 1 }}>
                        <Col lg={4}>
                            <h3>total order price:</h3>
                        </Col>
                        <Col lg={1}>
                            <h2>${cartTotalPrice.toFixed(2)}</h2>
                        </Col>
                    </Row>

                    {!formIsOpen && !customersData && <Row className='btn-order'>
                        <button
                            aria-label='order products'
                            title='order products'
                            onClick={() => setFormVisibility()}>
                            <h3>order</h3>
                        </button>
                    </Row>
                    }
                </Col>
            }

            {formIsOpen &&
                <OrderForm
                    setCustomer={setCustomer}
                />
            }

            <ModalAfterOrder
                modalIsShown={modalIsShown}
                setModalVisibility={setModalVisibility}
            />
        </Container>
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
        cartTotalPrice: state.cartTotalPrice,
        formIsOpen: state.formIsOpen,
        modalIsShown: state.modalIsShown
    }
}

const mapDispatchToProps = {
    setLoading,
    setError,
    addToCart,
    deleteFromCart,
    decCount,
    setFormVisibility,
    setModalVisibility
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartList)) //убрала withrouter возможно не будет работать 