import React from 'react';
import { Col, Row, Tab, Nav, Image } from 'react-bootstrap';
import ProductCard from '../product-card';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import './offer.css'

const OfferSection = ({ weekOfferItems, addToCart, RestoService }) => {

    const firstOffer = weekOfferItems.length > 0 && weekOfferItems[0]
    const secondOffer = weekOfferItems.length > 0 && weekOfferItems[1]

    const getURL = (id) => {
        RestoService.getImg('menu', id, 'jpg')
        .then(url => {return url} )
        console.log(RestoService.getImg('menu', id, 'jpg')
        .then(url => {return url} ))
    }

//src={`images/${secondOffer.id}-min.jpg`}

    return (
        <section id="offer-section">
            <div className="section-content">
                <header className="section-header">
                    <h1>This week offers</h1>
                    <p>
                        See our big range of departaments, whe offer a lot of attention to our patients<br /> see what fits you and give us a call
                    </p>
                </header>

                <Row className='tabs-big-container' >
                    <Tab.Container id='left-tabs' defaultActiveKey="first" >
                        <Col xs={12} md={3} lg={2} className='nav-link-col'>
                            <Nav>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        <Image fluid alt={firstOffer.title} 
                                        
                                        src={`images/${firstOffer.id}-min.jpg`} />
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">
                                        <Image fluid alt={secondOffer.title} src={() =>getURL(secondOffer.id)} />
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col md={8} lg={9}>
                            <Tab.Content>
                                <Tab.Pane
                                    eventKey='first'>
                                    <ProductCard
                                        product={firstOffer}
                                        onAddToCart={addToCart}
                                    />
                                </Tab.Pane>
                                <Tab.Pane
                                    eventKey='second'>
                                    <ProductCard
                                        product={secondOffer}
                                        onAddToCart={addToCart}
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Tab.Container>
                </Row>
            </div>
        </section>
    )
}

const mapStateToProps = state => {
    return {
        weekOfferItems: state.weekOfferItems
    }
}

const mapDispatchToProps = {
    addToCart
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(OfferSection));