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

            <Container fluid>
                { loading && <Spinner />}

                <Col lg={{ span: 1, offset: 1 }}>
                    <h1>Your order:</h1>
                </Col>


                <Col lg={{ span: 10, offset: 1 }} className='cart-items-list'>

                    {cart != null && cart.length > 0 && cart.map(cartItem => {

                        return (
                            <CartItem
                                key={cartItem.id}
                                cartItem={cartItem}
                            />
                        )
                    })}

                </Col>
                <Col className='row total-order-price' lg={{ span: 10, offset: 1 }}>
                    <Col lg={2}>
                        <h2>total order price:</h2>
                    </Col>
                    <Col lg={1}>
                        {totalPrice}
                    </Col>
                </Col>

                <Row className='row btn-order'>
                    <button>order</button>
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