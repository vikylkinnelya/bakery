import React from 'react';
import { FullHeaderContainer } from '../details/index'
import ShopListItems from '../shop-list-items';

const Shop = () => {

    return (
        <>
            <FullHeaderContainer title={'Menu'} descr={'See our menus and what we offer'} />
            <ShopListItems/>

            
        </>

    )
}

export default Shop;