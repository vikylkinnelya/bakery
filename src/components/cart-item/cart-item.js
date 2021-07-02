import React from 'react';
//import Spinner from '../spinner';
import { Col, Row } from 'react-bootstrap';
import './styles.css'

const CartItem = ({ cartItem, addToCart, deleteFromCart, decCount }) => {

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
            <Col xs={12} lg={3} className='cart-item-previev'>
                <img alt={name} src={`images/${id.split('-')[0]}-min.jpg`} />
            </Col>
            <Col xs={12} lg={4} className='cart-title-col'>
                <h3>{name} {param ? `, ${param}` : null}</h3>
            </Col>
            <Col xs={4} sm={2} className='count-col'>
                <h4>
                    <button
                        aria-label='decrement'
                        title='decrement'
                        onClick={() => onDecOrDelCount(id)}>-</button>
                    {count}
                    <button
                        aria-label='increment'
                        title='increment'
                        onClick={() => addToCart(id, param)}>
                        +
                    </button>
                </h4>
            </Col>
            <Col xs={3} sm={1}>
                <h4>${(price * count).toFixed(2)}</h4>
            </Col>
            <Col xs={2} sm={1} className='count-col'>
                <button
                    aria-label='delete'
                    title='delete product from cart'
                    onClick={() => deleteFromCart(id)}>
                    x
                </button>
            </Col>
        </Row>
    )
}

export default CartItem;