import { Container, Row } from 'react-bootstrap';
import Spinner from '../spinner'; 
import { PageHeader } from '../header';
import ShopSider from './shop-sider';
import React, { Suspense, lazy } from 'react';
const ShopListItems = lazy(() => import('./shop-list'))

const Shop = () => {
    return (
        <>
            <PageHeader title={'Menu'} descr={'See our menus and what we offer'} />
            <Suspense fallback={<Spinner />}>
                <Container fluid >
                    <Row className='shop-row'>
                        <ShopSider />
                        <ShopListItems />
                    </Row>
                </Container>
            </Suspense>
        </>
    )
}

export default Shop;