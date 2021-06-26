import React, { Component } from 'react';
import Spinner from '../spinner';
import { Col, Container, Row, Pagination, Toast } from 'react-bootstrap';
import ShopItem from '../shop-item';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';
import { LazyLoadComponent, trackWindowScroll } from 'react-lazy-load-image-component';
import { setMenu, setLoading, setError, setMenuType, addToCart, setLastVisible, setMenuTotalItems } from '../../actions';
import './styles.css';
//import db from '../firebase';

class ShopListItems extends Component {

    state = {
        endAt: 12,
        tostIsShown: false,
        tostItem: null
    }

    componentDidMount() {
        const { RestoService, location, setMenuTotalItems, setMenuType, setMenu, menuItems, setError, setLoading } = this.props;

        setLoading(true)

        const pathMenuType = location.pathname.split('/')[2]
        setMenuType(pathMenuType)

        RestoService.fetchMenu(pathMenuType)
            .then(res => setMenu(res)) //в этом экшене изменяется так же и ожидание
            .catch(error => setError(error))
    }

    componentDidUpdate(prevProps) {

        const { RestoService, menuType, lastVisible, setMenuTotalItems, setMenu, setError, setLoading } = this.props;

        if ((menuType !== prevProps.menuType) || (lastVisible !== prevProps.lastVisible)) {
            setLoading()

            /*             RestoService.getMenuItems(menuType, '')
                            .then(result => setMenuTotalItems(result.length)) */

            RestoService.fetchMenu(menuType)
                .then(res => setMenu(res))
                .catch(error => setError(error))
        }
    }

    render() {

        const { scrollPosition, menuItems, loading, error, menuType, setMenuType, cart, addToCart, menuTotalItems } = this.props

        /* const paginationItems = []

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
        } */

        const showMoreBtn = <button className='show-more-btn' onClick={() => onShowMore()}>
            Show more </button>

        const onShowMore = () => {
            this.setState({ endAt: this.state.endAt + 8 })
        }

        const onShowTost = (boolean, item) => {
            this.setState({ tostIsShown: boolean, tostItem: item })
        }

        const toast = <Toast
            className='added-toast'
            onClose={() => onShowTost(false)}
            show={this.state.tostIsShown}
            delay={3000}
            autohide
            style={{
                bottom: 10
            }}
        >
            <Toast.Body>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="35" height="35" viewBox="0 0 510 510" fill='#fdb822'>
                    <path d="M150.45,206.55l-35.7,35.7L229.5,357l255-255l-35.7-35.7L229.5,285.6L150.45,206.55z M459,255c0,112.2-91.8,204-204,204
			S51,367.2,51,255S142.8,51,255,51c20.4,0,38.25,2.55,56.1,7.65l40.801-40.8C321.3,7.65,288.15,0,255,0C114.75,0,0,114.75,0,255
			s114.75,255,255,255s255-114.75,255-255H459z"/>
                </svg>
                {this.state.tostItem} was added to your cart!
            </Toast.Body>

        </Toast>

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

                            <li className={menuType === 'bread' ? 'selected' : undefined}>
                                <Link to='bread' onClick={() => setMenuType('bread')}>
                                    <article>
                                        <div className="list-arrows-content">
                                            Bread
                                        </div>
                                        {menuType === 'bread' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                    </article>
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

                            <li className={menuType === 'lunch' ? 'selected' : undefined}>
                                <Link to='lunch' onClick={() => setMenuType('lunch')}>
                                    <article>
                                        <div className="list-arrows-content">
                                            Lunch
                                        </div>
                                        {menuType === 'lunch' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                    </article>
                                </Link>
                            </li>

                            <li className={menuType === 'tarts' ? 'selected' : undefined}>
                                <Link to='tarts' onClick={() => setMenuType('tarts')}>
                                    <article>
                                        <div className="list-arrows-content">
                                            Tarts
                                        </div>
                                        {menuType === 'tarts' && <div className="list-arrows-value">{menuTotalItems}</div>}
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
                            {!loading && menuItems != null && menuItems.length > 0
                                && menuItems.slice(0, this.state.endAt).map(menuItem => (
                                    <LazyLoadComponent
                                        key={menuItem.id}
                                        scrollPosition={scrollPosition}
                                        threshold={50}
                                    >
                                        <ShopItem
                                            menuItem={menuItem}
                                            menuType={menuType}
                                            onAddToCart={addToCart}
                                            onShowTost={onShowTost}
                                            cart={cart}
                                        />
                                    </LazyLoadComponent>
                                ))}
                        </Row>
                    </Col>

                    <LazyLoadComponent>
                        {!loading &&
                            <Col sm={{ order: 12 }} className='pagination-col'>
                                {this.state.endAt <= menuItems.length && showMoreBtn}
                                {/* <Pagination >
                                    <Pagination.Prev className="pagination-item pagination-nav" />
                                    {paginationItems}
                                    <Pagination.Next className="pagination-item pagination-nav" />
                                </Pagination> */}
                            </Col>
                        }
                    </LazyLoadComponent>
                    {toast}
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

