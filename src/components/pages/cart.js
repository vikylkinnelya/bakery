import React from 'react';
import {PageHeader}  from '../header';
import CartList from '../cart-list';
import { connect } from 'react-redux';


const Cart = ({cart}) => {

    const title = cart.length > 0 ? 'Cart' : 'Your cart is empty'
    const descr = cart.length > 0 ? 'Order our bests which we fresshly made for you': 'Looks like you havent added anything to your cart yet'

    return (
        <>
            <PageHeader title={title} descr={descr} />
            <CartList/>
        </>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)
