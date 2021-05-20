import React from 'react';
import Spinner from '../spinner';
import { Col, Row } from 'react-bootstrap';
import './styles.css'

const CartItem = ({cartItem, totalPrice}) => {

    const { id, name, count, param } = cartItem

    return (
            <Row className='cart-item-row'>
                <Col lg={2} className='cart-item-previev'>
                    <img alt={name} src={`../../images/shop/${id}-min.jpg`}/>
                </Col>
                <Col>
                    {name} { param ? `, ${param}` : null}
                </Col>
                <Col lg={2} className='count-col'>
                    <button>-</button>
                    {count}
                    <button>+</button>
                </Col>
                <Col lg={2}>
                    total price
                </Col>
            </Row>

    )
}

export default CartItem;