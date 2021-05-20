import React, { Component } from 'react';
import Spinner from '../spinner';
import { Col, Container, Row, Pagination } from 'react-bootstrap';
import ShopItem from '../shop-item';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import WithRestoService from '../hoc';
import { setMenu, setLoading, setError, setMenuType, addToCart } from '../../actions';
import './styles.css'

class CartList extends Component {

    render() {

        const { loading, error, cart, totalPrice, addToCart } = this.props

        return (

            <Container fluid>
                { loading && <Spinner />}



                {/* {cart != null && cart.length> 0 && cart.map(item => {
                    return (
                        
                    )
                })} */}

                <Col lg={12}>
                    <h1>Your order:</h1>

                    <Row className='cart-item-row'>
                        <Col lg={2}>
                            photo
                    </Col>
                        <Col>
                            title
                    </Col>
                        <Col>
                            param
                    </Col>
                        <Col lg={2} className='count-col'>
                            <button>-</button>
                        count
                    <button>+</button>
                        </Col>
                        <Col lg={2}>
                            total price
                    </Col>
                    </Row>

                    <Row className='row total-order-price'>
                        <Col lg={2}>
                            <h2>total order price:</h2>
                        </Col>
                        <Col lg={1}>
                            total order price
                        </Col>
                    </Row>

                    <Row className='row btn-order'>
                        <button>order</button>
                    </Row>

                </Col>



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