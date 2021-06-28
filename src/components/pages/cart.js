import React from 'react';
import {PageHeader}  from '../small-comp';
import CartList from '../cart-list';

const Cart = () => {
    return (
        <>
            <PageHeader title={'Cart'} descr={'Order our bests which we fresshly made for you'} />
            <CartList/>
        </>
    )
}

export default Cart;