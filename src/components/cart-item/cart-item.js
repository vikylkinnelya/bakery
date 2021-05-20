import React from 'react';
import Spinner from '../spinner';
import { Col, Row } from 'react-bootstrap';
import './styles.css'
import { counter } from '@fortawesome/fontawesome-svg-core';

const CartItem = ({cartItem, totalPrice}) => {

    const { id, name, count, param, price } = cartItem

    return (
            <Row className='cart-item-row'>
                <Col lg={2} className='cart-item-previev'>
                    <img alt={name} src={`../../images/shop/${id.split('-')[0]}-min.jpg`}/>
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
                    ${price * count}
                </Col>
            </Row>

    )
}

export default CartItem;