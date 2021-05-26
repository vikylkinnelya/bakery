import React, { Component } from 'react';
import Spinner from '../spinner';
import { Col, Container, Row, Pagination } from 'react-bootstrap';
import ShopItem from '../shop-item';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import WithRestoService from '../hoc';
import { setMenu, setLoading, setError, setMenuType, addToCart, setMenuPage, setMenuTotalItems } from '../../actions';
import './styles.css'

class ShopListItems extends Component {

    componentDidMount() {
        this.props.setLoading()

        const { RestoService, location, setMenuTotalItems } = this.props;

        const pathMenuType = location.pathname.split('/')[2]
        this.props.setMenuType(pathMenuType)

        RestoService.getMenuItems(pathMenuType, '')
            .then(result => setMenuTotalItems(result.length))

        RestoService.getMenuItems(pathMenuType, 1)
            .then(res => this.props.setMenu(res))
            .catch(error => this.props.setError())


    }

    componentDidUpdate(prevProps) {

        const { RestoService, menuType, setMenuTotalItems, menuCurrPage } = this.props;

        if ((this.props.menuType !== prevProps.menuType) || (this.props.menuCurrPage !== prevProps.menuCurrPage)) {
            this.props.setLoading()

            RestoService.getMenuItems(menuType, '')
                .then(result => setMenuTotalItems(result.length))

            RestoService.getMenuItems(menuType, menuCurrPage)
                .then(res => this.props.setMenu(res))
                .catch(error => this.props.setError())
        }
    }

    render() {

        const { menuItems, loading, error, menuType, setMenuType, addToCart, menuCurrPage, menuTotalItems } = this.props

        const paginationItems = []

        for (let i = 1; i <= Math.ceil(menuItems.length / 9); i++) {
            paginationItems.push(
                <Pagination.Item
                    className="pagination-item"
                    key={i}
                    active={i === menuCurrPage}
                    activeLabel={null}>
                    {i}
                </Pagination.Item>
            )
        }

        return (
            <Container fluid>
                <Row className='shop-row'>
                    <Col sm={{ span: 12, order: 11 }} md={{ span: 12, order: 2 }} lg={{ span: 10, order: 1 }} className='product-col'>
                        {loading && <Spinner type={'coffee'} />}
                        <Row className='product-row'>
                            {!loading && menuItems != null && menuItems.length > 0 && menuItems.map(menuItem => {
                                return (
                                    <ShopItem
                                        key={menuItem.id}
                                        menuItem={menuItem}
                                        menuType={menuType}
                                        onAddToCart={addToCart}
                                    />
                                )
                            })}

                        </Row>

                    </Col>
                    <Col sm={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }} lg={{ span: 2, order: 1 }} className="sidebar">
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


                    <Col sm={{ order: 12 }} className='pagination-col'>
                        <Pagination >
                            <Pagination.Prev className="pagination-item pagination-nav" />
                            {paginationItems}
                            <Pagination.Next className="pagination-item pagination-nav" />
                        </Pagination>
                    </Col>

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
        menuCurrPage: state.menuCurrPage,
        menuTotalItems: state.menuTotalItems,
        cart: state.cart
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    setMenuType,
    setMenuPage,
    setMenuTotalItems,
    addToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopListItems)))

