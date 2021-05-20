import React from 'react';
import { FullHeaderContainer } from '../details/index';
import CartList from '../cart-list';



const Cart = () => {

    return (
        <>
            <FullHeaderContainer title={'Cart'} descr={'Order our bests which we fresshly made for you'} />
            <CartList/>
        </>

    )
}

export default Cart;