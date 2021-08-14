import React, { useState, useEffect, useCallback, useMemo, lazy } from 'react';
import Spinner from '../../spinner';
import ErrorComponent from '../../error';
import { Col, Row } from 'react-bootstrap';
import ShopItem from '../shop-item';
import { ToastComp } from '../../small-comp';
import WithRestoService from '../../hoc';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { setMenu, setLoading, setError, setMenuType, showTost } from '../../../actions';
const ModalWithProductDetail = lazy(() => import('../../modal-with-product-details/modal-with-product-detail'));

const ShopListItems = ({ productModal, RestoService, location, setMenuType, setMenu, setError, setLoading, scrollPosition, menuItems, loading, error, menuType, menuTotalLength, tostTitle, tostIsShown, showTost }) => {

    const [endAt, setEndAt] = useState(12)

    const memoizedLocation = useMemo(() => {
        const locationName = location.pathname.split('/')[2]
        setMenuType(locationName)
        return locationName
    }, [location.pathname, setMenuType])

    const getMenu = useCallback(() => {
        RestoService.fetchMenu(memoizedLocation)
            .then(res => setMenu(res)) //в этом экшене изменяется так же и ожидание
            .catch(error => setError(error))
    }, [memoizedLocation, RestoService, setError, setMenu])

    useEffect(() => {
        setLoading(true)
        getMenu(memoizedLocation)
    }, [memoizedLocation, getMenu, setLoading])


    const showMoreBtn = <button className='show-more-btn' onClick={() => onShowMore()}>
        Show more </button>

    const onShowMore = () => {
        setEndAt(endAt + 8)
    }

    return (
        <>
            <Col sm={{ span: 12, order: 2 }} lg={{ span: 10, order: 1 }} className='product-col'>

                {loading && <Spinner /> && !error}
                {error && <ErrorComponent /> && !loading}

                <Row className='product-row'>
                    {!loading && !error && menuItems != null && menuItems.length > 0
                        && menuItems.slice(0, endAt).map(menuItem => (
                            <ShopItem
                                key={menuItem.id}
                                menuItem={menuItem}
                            />
                        ))}
                </Row>
                {
                    !loading &&
                    <Row className='pagination-col'>
                        {endAt <= menuItems.length && showMoreBtn}
                    </Row>
                }
            </Col>



            <ToastComp
                tostTitle={tostTitle}
                tostIsShown={tostIsShown}
                showTost={showTost}
            />

            <ModalWithProductDetail product={productModal} />

        </>
    )
}


const mapStateToProps = state => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        menuType: state.menuType,
        menuTotalLength: state.menuTotalLength,
        tostIsShown: state.tostIsShown,
        tostTitle: state.tostTitle,
        productModal: state.productModal
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    setMenuType,
    showTost,
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopListItems)))

