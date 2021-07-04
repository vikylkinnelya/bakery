import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorComponent from '../error';
import { Col, Container, Row } from 'react-bootstrap';
import ShopItem from '../shop-item';
import { ToastComp } from '../small-comp';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import { LazyLoadComponent, trackWindowScroll } from 'react-lazy-load-image-component';
import { setMenu, setLoading, setError, setMenuType, addToCart, setMenuTotalItems, showTost } from '../../actions';
import './styles.css';
//import db from '../firebase';

class ShopListItems extends Component {

    state = {
        endAt: 12,
        tostItem: null
    }

    componentDidMount() {
        const { RestoService, location, setMenuType, setMenu, setError, setLoading } = this.props;

        setLoading(true)

        const pathMenuType = location.pathname.split('/')[2]
        setMenuType(pathMenuType)

        RestoService.fetchMenu(pathMenuType)
            .then(res => setMenu(res)) //в этом экшене изменяется так же и ожидание
            .catch(error => setError(error))
    }

    componentDidUpdate(prevProps) {

        const { RestoService, location, menuType, setMenuType, setMenu, setError, setLoading } = this.props;

        const pathMenuType = location.pathname.split('/')[2]

        if (pathMenuType !== prevProps.menuType) {
            setMenuType(pathMenuType)
            setLoading()

            RestoService.fetchMenu(menuType)
                .then(res => setMenu(res))
                .catch(error => setError(error))
        }
    }

    render() {

        const { scrollPosition, menuItems, loading, error, menuType, cart, addToCart, menuTotalItems, tostTitle, tostIsShown, showTost } = this.props

        const showMoreBtn = <button className='show-more-btn' onClick={() => onShowMore()}>
            Show more </button>

        const onShowMore = () => {
            this.setState({ endAt: this.state.endAt + 8 })
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

                                <Link to='all' >
                                    <div className="list-arrows-content">
                                        All
                                    </div>
                                    {menuType === 'all' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                </Link>
                            </li>

                            <li className={menuType === 'bread' ? 'selected' : undefined}>
                                <Link to='bread' >
                                    <article>
                                        <div className="list-arrows-content">
                                            Bread
                                        </div>
                                        {menuType === 'bread' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                    </article>
                                </Link>
                            </li>

                            <li className={menuType === 'breakfast' ? 'selected' : undefined}>
                                <Link to='breakfast' >
                                    <article>
                                        <div className="list-arrows-content">
                                            Breakfast
                                        </div>
                                        {menuType === 'breakfast' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                    </article>
                                </Link>
                            </li>

                            <li className={menuType === 'lunch' ? 'selected' : undefined}>
                                <Link to='lunch' >
                                    <article>
                                        <div className="list-arrows-content">
                                            Lunch
                                        </div>
                                        {menuType === 'lunch' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                    </article>
                                </Link>
                            </li>

                            <li className={menuType === 'tarts' ? 'selected' : undefined}>
                                <Link to='tarts' >
                                    <article>
                                        <div className="list-arrows-content">
                                            Tarts
                                        </div>
                                        {menuType === 'tarts' && <div className="list-arrows-value">{menuTotalItems}</div>}
                                    </article>
                                </Link>
                            </li>

                            <li className={menuType === 'drinks' ? 'selected' : undefined}>
                                <Link to='drinks' >
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

                        {loading && <Spinner/> && !error}
                        {error && <ErrorComponent/> && !loading}

                        <Row className='product-row'>
                            {!loading && !error && menuItems != null && menuItems.length > 0
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
                                            showTost={showTost}
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
                            </Col>
                        }
                    </LazyLoadComponent>


                    <ToastComp
                        tostTitle={tostTitle}
                        tostIsShown={tostIsShown}
                        showTost={showTost}
                    />

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
        cart: state.cart,
        tostIsShown: state.tostIsShown,
        tostTitle: state.tostTitle
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    setMenuType,
    setMenuTotalItems,
    addToCart,
    showTost
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(trackWindowScroll(ShopListItems))))

