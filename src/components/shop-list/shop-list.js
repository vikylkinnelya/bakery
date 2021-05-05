import React, { useEffect } from 'react';
import ShopItem from '../shop-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { menuLoaded, menuRequested, menuError } from '../../actions'

import { Col, Container, Row, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ShopListItems = ({menuItems, menuRequested, RestoService}) => {

    //const { menuItems, loading, error, addedToCart } = this.props;

    useEffect(() => {
        menuRequested() //set loading

        //const { RestoService } = this.props;
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res)) //setMenu(res)
            .catch(error => this.props.menuError()) //setError(true)
    }, [])

    const shopItems = menuItems.map(menuItem => {
        return (
            <ShopItem
                menuItem={menuItem}
                key={menuItem.id}
            />
        )
    })

    return (
        <Container classNameName='container'>
            <Row classNameName='container-row'>
                <Col md="9">
                    {shopItems}
                </Col>

                <Col md='3' className="col-md-3 sidebar">
                    <div className="margin-40"></div>
                    <form className="form-search onscroll-animate">
                        <input name="s" type="text" placeholder="Type and hit enter" />
                    </form>
                    <div className="article-header-4">
                        <h1>Categories</h1>
                    </div>
                    <ul className="list-arrows">
                        <li>
                            <Link to='/'>
                                <div className="list-arrows-content">
                                    All
                                </div>
                                <div className="list-arrows-value">11</div>
                            </Link>
                        </li>

                        <li>
                            <Link to='/'>
                                <article>
                                    <div className="list-arrows-content">
                                        Breads
                                    </div>
                                    <div className="list-arrows-value">11</div>
                                </article>
                            </Link>
                        </li>

                        <li>
                            <Link to='/'>
                                <article>
                                    <div className="list-arrows-content">
                                        Croissants
                                    </div>
                                    <div className="list-arrows-value">15</div>
                                </article>
                            </Link>
                        </li>

                        <li>
                            <Link to='/'>
                                <article>
                                    <div className="list-arrows-content">
                                        Cakes
                                    </div>
                                    <div className="list-arrows-value">33</div>
                                </article>
                            </Link>
                        </li>

                        <li>
                            <Link to='/'>
                                <article>
                                    <div className="list-arrows-content">
                                        Flour Products
                                    </div>
                                    <div className="list-arrows-value">02</div>
                                </article>
                            </Link>
                        </li>

                        <li>
                            <Link to='/'>
                                <article>
                                    <div className="list-arrows-content">
                                        Diabetes
                                    </div>
                                    <div className="list-arrows-value">25</div>
                                </article>
                            </Link>
                        </li>
                    </ul>
                    <div className="margin-60"></div>
                </Col>

                <PaginationComponent />


            </Row>
        </Container>
    )
}

const PaginationComponent = () => {
    const state = []
    let active = 1;
    let items = []

    for (let i = 1; i <= 7 && i <= state.length; i++) {
        items.push(
            <Pagination.Item
                classNameName="pagination-item"
                key={i}
                active={i === active}
                activeLabel={null}>
                {i}
            </Pagination.Item>
        )
    }

    return (

        <Pagination classNameName="pagination">
            <Pagination.Prev classNameName="pagination-item pagination-nav" />
            {items}
            <Pagination.Next classNameName="pagination-item pagination-nav" />
        </Pagination>

    );
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = {
    menuLoaded,
    menuRequested,
    menuError
}



export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ShopListItems))