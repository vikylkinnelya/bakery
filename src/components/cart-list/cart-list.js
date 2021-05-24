import React, { Component } from 'react';
import Spinner from '../spinner';
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from '../cart-item';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import scrollToComponent from 'react-scroll-to-component';
import { Link } from 'react-scroll';
import WithRestoService from '../hoc';
import { setMenu, setLoading, setError, addToCart, setFormVisibility, deleteFromCart, decCount } from '../../actions';
import Form from '../form';
import './styles.css'

class CartList extends Component {

    render() {

        const { loading, error, cart, totalPrice, addToCart, deleteFromCart, decCount, setFormVisibility, formIsOpen} = this.props

        return (

            <Container fluid className='cart-list'>

                {loading && <Spinner />}

                {cart.length > 0 &&
                    <Col lg={{ span: 8, offset: 2 }} className='cart-items-list'>

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
                    {formIsOpen && <Form />}
                </Row>





            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        cart: state.cart,
        totalPrice: state.totalPrice,
        formIsOpen: state.formIsOpen
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    addToCart, deleteFromCart, decCount,
    setFormVisibility
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(CartList)))