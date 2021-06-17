import React, { Component } from 'react';
import Spinner from '../spinner';
import { Col, Container, Row, Pagination } from 'react-bootstrap';
import ShopItem from '../shop-item';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import { LazyLoadComponent, trackWindowScroll } from 'react-lazy-load-image-component';
import { setMenu, setLoading, setError, setMenuType, addToCart, setLastVisible, setMenuTotalItems } from '../../actions';
import './styles.css';
import db from '../firebase';

class ShopListItems extends Component {

    componentDidMount() {
        const { RestoService, location, setMenuTotalItems, setMenuType, setMenu, menuItems, setError, setLoading } = this.props;

        setLoading(true)

        const pathMenuType = location.pathname.split('/')[2]
        setMenuType(pathMenuType)

        RestoService.fetchMenuSize(pathMenuType)
            .then(res => setMenuTotalItems(res))
            .catch(error => setError(error))

        RestoService.fetchMenu()
            .then(res => setMenu(res)) //в этом экшене изменяется так же и ожидание
            .catch(error => setError(error))
    }

    componentDidUpdate(prevProps) {

        const { RestoService, menuType, lastVisible, setMenuTotalItems, setMenu, setError, setLoading } = this.props;

        if ((menuType !== prevProps.menuType) || (lastVisible !== prevProps.lastVisible)) {
            setLoading()

            /*             RestoService.getMenuItems(menuType, '')
                            .then(result => setMenuTotalItems(result.length)) */

            RestoService.fetchMenuSize(menuType)
                .then(res => setMenuTotalItems(res))
                .catch(error => setError(error))

            RestoService.fetchMenu(menuType)
                .then(res => setMenu(res))
                .catch(error => setError(error))
        }
    }

    render() {

        const { scrollPosition, menuItems, loading, error, menuType, setMenuType, setLastVisible, addToCart, lastVisible, menuTotalItems } = this.props

        const paginationItems = []

        for (let i = 1; i <= Math.ceil(menuTotalItems / 9); i++) {
            paginationItems.push(

                <Pagination.Item
                    to={`${i}`}
                    className="pagination-item"
                    key={i}
                    active={i === lastVisible}
                    activeLabel={null}
                    onClick={() => {
                        setLastVisible(i);
                        scrollToComponent(this.Shop, { offset: -150, align: 'top', duration: 500 })
                    }}
                >
                    {i}
                </Pagination.Item>

            )
        }

        return (
            <Container fluid ref={(section) => { this.Shop = section; }}>
                <Row className='shop-row'>

                    <Col sm={{ span: 12, order: 1 }} lg={{ span: 2, order: 2 }} className="sidebar">

                        <form className="form-search onscroll-animate">
                            <input name="s" type="text" placeholder="Type and hit enter" />
                        </form>

                        <div className="article-header-4">
                            <h1>Categories</h1>
                        </div>
                        <ul className="list-arrows">
                            <li className={menuType === 'all' ? 'selected' : undefined}>

                                <Link to='all' onClick={() => setMenuType('all')}>
                                    <div className="list-arrows-content">
                                        All
                                    </div>
                                    {menuType === 'all' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                </Link>
                            </li>

                            <li className={menuType === 'breakfast' ? 'selected' : undefined}>
                                <Link to='breakfast' onClick={() => setMenuType('breakfast')}>
                                    <article>
                                        <div className="list-arrows-content">
                                            Breakfast
                                        </div>
                                        {menuType === 'breakfast' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                    </article>
                                </Link>
                            </li>
                            <li className={menuType === 'bakery' ? 'selected' : undefined}>
                                <Link to='bakery' onClick={() => setMenuType('bakery')}>
                                    <article>
                                        <div className="list-arrows-content">
                                            Bakery
                                        </div>
                                        {menuType === 'bakery' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                    </article>
                                </Link>
                            </li>


                            <li className={menuType === 'drinks' ? 'selected' : undefined}>
                                <Link to='drinks' onClick={() => setMenuType('drinks')}>
                                    <article>
                                        <div className="list-arrows-content">
                                            Drinks
                                        </div>
                                        {menuType === 'drinks' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                    </article>
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    <Col sm={{ span: 12, order: 2 }} lg={{ span: 10, order: 1 }} className='product-col'>

                        {loading && <Spinner type={'coffee'} />}

                        <Row className='product-row'>
                            {!loading && menuItems != null && menuItems.length > 0 && menuItems.map(menuItem => (
                                <LazyLoadComponent
                                    key={menuItem.id}
                                    scrollPosition={scrollPosition}>
                                    <ShopItem
                                        menuItem={menuItem}
                                        menuType={menuType}
                                        onAddToCart={addToCart}
                                    />
                                </LazyLoadComponent>
                            ))}
                        </Row>
                    </Col>

                    <LazyLoadComponent>
                        {!loading &&
                            <Col sm={{ order: 12 }} className='pagination-col'>
                                <Pagination >
                                    <Pagination.Prev className="pagination-item pagination-nav" />
                                    {paginationItems}
                                    <Pagination.Next className="pagination-item pagination-nav" />
                                </Pagination>
                            </Col>
                        }
                    </LazyLoadComponent>
                </Row>
            </ Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        menuType: state.menuType,
        lastVisible: state.lastVisible,
        menuTotalItems: state.menuTotalItems,
        cart: state.cart
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    setMenuType,
    setLastVisible,
    setMenuTotalItems,
    addToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(trackWindowScroll(ShopListItems))))

