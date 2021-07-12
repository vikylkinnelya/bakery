import {PageHeader}  from '../header';
import ShopListItems from './shop-list';

const Shop = () => {
    return (
        <>
            <PageHeader title={'Menu'} descr={'See our menus and what we offer'} />
            <ShopListItems/>
        </>
    )
}

export default Shop;