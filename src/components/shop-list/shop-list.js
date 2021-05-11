import React, { Component } from 'react';
import ShopItem from '../shop-item';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import { setMenu, setLoading, setError, setMenuType, setMenuTotalItems } from '../../actions';
import { Col, Container, Row, Pagination } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Spinner from '../spinner';

class ShopListItems extends Component {

    componentDidMount() {
        this.props.setLoading()
        const { RestoService, menuType } = this.props;

        RestoService.getMenuItems(menuType)
            .then(res => (Object.values(res)))
            .then(res => this.props.setMenu(res))
            .catch(error => this.props.setError())
        
    }

    componentDidUpdate(prevProps) {

        const { RestoService, menuType } = this.props;

        if (this.props.menuType !== prevProps.menuType) {
            this.props.setLoading()
            RestoService.getMenuItems(menuType)
                .then(res => this.props.setMenu(res))
                .catch(error => this.props.setError())
        }
    }

    render() {

        const { menuItems, loading, error, menuType, setMenuType } = this.props
        const items = []

        return (
            <Container className='container' >

                { loading && <Spinner />}

                <Row className='container-row'>

                    <Col md="9">
                        <div className="margin-60"></div>
                        <Row >
                            {menuItems != null && menuItems.length > 0 && menuItems.map(menuItem => {
                                return (
                                    <ShopItem
                                        key={menuItem.item_id}
                                        menuItem={menuItem}
                                    />
                                )
                            })}
                        </Row>
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
                            <li className={menuType === 'all' ? 'selected' : undefined}>

                                <Link to='/shop/' onClick={() => setMenuType('all')}>
                                    <div className="list-arrows-content">
                                        All
                                    </div>
                                    {menuType === 'all' && <div className="list-arrows-value">{menuItems.length}</div>}
                                </Link>
                            </li>

                            <li className={menuType === 'Breakfast' ? 'selected' : undefined}>
                                <Link to='Breakfast' onClick={() => setMenuType('Breakfast')}>
                                    <article>
                                        <div className="list-arrows-content">
                                            Breakfast
                                        </div>
                                        {menuType === 'Breakfast' && <div className="list-arrows-value">{menuItems.length}</div>}
                                    </article>
                                </Link>
                            </li>

                            <li className={menuType === 'Coffee & Tea' ? 'selected' : undefined}>
                                <Link to='coffee-and-tea' onClick={() => setMenuType('Coffee & Tea')}>
                                    <article>
                                        <div className="list-arrows-content">
                                            Coffee & Tea
                                    </div>
                                        {menuType === 'Coffee & Tea' && <div className="list-arrows-value">{menuItems.length}</div>}
                                    </article>
                                </Link>
                            </li>

                            <li className={menuType === 'Bakery' ? 'selected' : undefined}>
                                <Link to='bakery' onClick={() => setMenuType('Bakery')}>
                                    <article>
                                        <div className="list-arrows-content">
                                            Cakes
                                    </div>
                                        {menuType === 'Bakery' && <div className="list-arrows-value">{menuItems.length}</div>}
                                    </article>
                                </Link>
                            </li>
                        </ul>
                        <div className="margin-60"></div>
                    </Col>

                    <Pagination className="pagination">
                        <Pagination.Prev className="pagination-item pagination-nav" />
                        {items}
                        <Pagination.Next className="pagination-item pagination-nav" />
                    </Pagination>


                </Row>
            </Container >
        )
    }
}

/* const PaginationComponent = () => {
    const statee = []
    let active = 1;
    let items = []

    for (let i = 1; i <= 7 && i <= statee.length; i++) {
        items.push(
            <Pagination.Item
                className="pagination-item"
                key={i}
                active={i === active}
                activeLabel={null}>
                {i}
            </Pagination.Item>
        )
    }
} */

const mapStateToProps = state => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
        menuType: state.menuType,
        menuTotalItems: state.menuTotalItems
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    setMenuType,
    setMenuTotalItems
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ShopListItems))

