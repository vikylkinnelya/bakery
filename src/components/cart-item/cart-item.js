import React, { useState, useEffect } from 'react';
import { storage, auth } from '../firebase';
import { Col, Row } from 'react-bootstrap';
import './styles.css'

const CartItem = ({ cartItem, addToCart, deleteFromCart, decCount }) => {

    const { id, name, count, param, price } = cartItem
    const [imgUrl, setImgUrl] = useState()

    const onDecOrDelCount = (id) => {
        if (count - 1 < 0) {
            return deleteFromCart(id)
        } else {
            return decCount(id)
        }
    }

    const getImg = (id) => {
        storage.child(`menu/${id.split('-')[0]}-min.jpg`)
            .getDownloadURL()
            .then(url => {
                setImgUrl(url)
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        auth.then(() => console.log('signed in'))
            .catch(error => console.log(error))
        getImg(id)
    })





    return (
        <Row className='cart-item'>
            <Col xs={12} lg={3} className='cart-item-previev'>
                <img alt={name} src={imgUrl} />
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