import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorComponent from '../error';
import { Col, Container, Row } from 'react-bootstrap';
import ShopItem from '../shop-item';
import ShopSider from '../shop-sider';
import { ToastComp } from '../small-comp';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { LazyLoadComponent, trackWindowScroll } from 'react-lazy-load-image-component';
import { setMenu, setLoading, setError, setMenuType, showTost } from '../../actions';
import './styles.css';
//import db from '../firebase';

class ShopListItems extends Component {

    state = {
        endAt: 12,
    }

    componentDidMount() {
        const { RestoService, location, setMenuType, setMenu, setError, setLoading } = this.props;
        RestoService.doAuth()

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

        console.log('comp did upd')

        if (pathMenuType !== prevProps.menuType) {
            setMenuType(pathMenuType)
            setLoading()

            RestoService.fetchMenu(menuType)
                .then(res => setMenu(res))
                .catch(error => setError(error))
        }
    }

    render() {

        const { scrollPosition, menuItems, loading, error, menuType, menuTotalLength, tostTitle, tostIsShown, showTost } = this.props

        const showMoreBtn = <button className='show-more-btn' onClick={() => onShowMore()}>
            Show more </button>

        const onShowMore = () => {
            this.setState({ endAt: this.state.endAt + 8 })
        }

        return (
            <Container fluid ref={(section) => { this.Shop = section; }}>
                <Row className='shop-row'>

                    <ShopSider
                        menuType={menuType}
                        menuTotalLength={menuTotalLength}
                    />

                    <Col sm={{ span: 12, order: 2 }} lg={{ span: 10, order: 1 }} className='product-col'>

                        {loading && <Spinner /> && !error}
                        {error && <ErrorComponent /> && !loading}

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
        menuTotalLength: state.menuTotalLength,
        tostIsShown: state.tostIsShown,
        tostTitle: state.tostTitle
    }
}

const mapDispatchToProps = {
    setMenu,
    setLoading,
    setError,
    setMenuType,
    showTost
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(withRouter(trackWindowScroll(ShopListItems))))

