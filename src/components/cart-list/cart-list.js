import React, { Component } from 'react';
import Spinner from '../spinner';
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from '../cart-item';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import WithRestoService from '../hoc';
import { setMenu, setLoading, setError, addToCart } from '../../actions';
import './styles.css'

class CartList extends Component {

    render() {

        const { loading, error, cart, totalPrice, addToCart } = this.props

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
                                />
                            )
                        })}

                        <Col className='row total-order-price' lg={{ span: 8, offset: 2 }}>
                            <Col lg={3}>
                                <h3>total order price:</h3>
                            </Col>
                            <Col lg={2}>
                                <h2>${totalPrice}</h2>
                            </Col>
                        </Col>

                        <Row className='row btn-order'>
                            <button><h3>order</h3></button>
                        </Row>

                    </Col>
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
        cart: state.cart,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    addToCart
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(CartList)))