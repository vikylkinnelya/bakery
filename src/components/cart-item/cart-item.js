import React from 'react';
//import Spinner from '../spinner';
import { Col, Row } from 'react-bootstrap';
import './styles.css'

const CartItem = ({ cartItem, totalPrice, addToCart, deleteFromCart, decCount }) => {

    const { id, name, count, param, price } = cartItem

    const onDecOrDelCount = (id) => {
        if (count - 1 < 0) {
            return deleteFromCart(id)
        } else {
            return decCount(id)
        }
    }

    return (
        <Row className='cart-item'>
            <Col lg={2} className='cart-item-previev'>
                <img alt={name} src={`../../images/shop/${id.split('-')[0]}-min.jpg`} />
            </Col>
            <Col>
                <h3>{name} {param ? `, ${param}` : null}</h3>
            </Col>
            <Col lg={2} className='count-col'>
                <h4>
                    <button onClick={() => onDecOrDelCount(id)}>-</button>
                    {count}
                    <button onClick={() => addToCart(id, param)}>+</button>
                </h4>
            </Col>
            <Col lg={2}>
                <h4>${(price * count).toFixed(2)}</h4>
            </Col>
            <Col lg={1} className='count-col'>
                <button onClick={() => deleteFromCart(id)}>
                    x
                </button>
            </Col>
        </Row>

    )
}

export default CartItem;