import React, { Component } from 'react';
import Spinner from '../spinner';
import { Col, Row } from 'react-bootstrap';
import CartItem from '../cart-item';
import ModalAfterForm from '../modal-after-form';
import { FormForOrder } from '../forms';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import WithRestoService from '../hoc';
import { setMenu, setLoading, setError, addToCart, setFormVisibility, setModalVisibility, deleteFromCart, decCount } from '../../actions';

import './styles.css'

class CartList extends Component {

    state = { customer: '' }

    setCustomer = (data) => {
        this.setState({ customer: data })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { RestoService, cart, setModalVisibility, setError } = this.props

        setLoading(true)

        if (this.state.customer !== prevState.customer) {
            RestoService.setOrder(generateOrder(cart, this.state.customer))
                .catch(error => setError())
            setModalVisibility()
            setLoading(false)
        }
    }

    render() {

        const { loading, error, cart, modalIsShown, setModalVisibility, totalPrice, addToCart, deleteFromCart, decCount, setFormVisibility, formIsOpen } = this.props

        return (

            <div className='cart-list'>

                <ModalAfterForm
                    modalIsShown={modalIsShown}
                    setModalVisibility={setModalVisibility}
                />

                {loading && <Spinner />}

                {cart.length > 0 &&
                    <Col lg={{ span: 8, offset: 2 }} className='cart-items-list onscroll-animate'>

                        <Col lg={3}>
                            <h1>Your order:</h1>
                        </Col>

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

                        <Col className='row total-order-price' lg={{ span: 10, offset: 1 }}>
                            <Col lg={4}>
                                <h3>total order price:</h3>
                            </Col>
                            <Col lg={1}>
                                <h2>${totalPrice.toFixed(2)}</h2>
                            </Col>
                        </Col>

                        {!formIsOpen && <Row className='btn-order'>
                            <button onClick={() => { setFormVisibility() }}>
                                <h3>order</h3>
                            </button>
                        </Row>
                        }
                    </Col>
                }

                <Row>
                    {formIsOpen &&
                        <FormForOrder
                            setCustomer={this.setCustomer}
                        />
                    }
                </Row>



            </div>
        )
    }
}

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            count: item.count
        }
    })
    return newOrder
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        cart: state.cart,
        totalPrice: state.totalPrice,
        formIsOpen: state.formIsOpen,
        modalIsShown: state.modalIsShown
    }
}

const mapDispatchToProps = {
    setLoading,
    setError
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartList)) //убрала withrouter возможно не будет работать 