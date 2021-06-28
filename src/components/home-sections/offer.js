import React from 'react';
import { Col, Row, Tab, Nav, Image } from 'react-bootstrap';
import ProductCard from '../product-card';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import './offer.css'

const OfferSection = ({ weekOffer, addToCart }) => {

    const firstOffer = weekOffer.length > 0 && weekOffer[0]
    const secondOffer = weekOffer.length > 0 && weekOffer[1]
    const thirdOffer = weekOffer.length > 0 && weekOffer[2]

    return (
        <section id="offer-section">
            <div className="section-content">
                <header className="section-header">
                    <h1>This week offers</h1>
                    <p>
                        See our big range of departaments, whe offer a lot of attention to our patients<br /> see what fits you and give us a call
                    </p>
                </header>
                <Tab.Container id='left-tabs' defaultActiveKey="first" >
                    <Row className='tabs-big-container'>

                        <Nav className="col-lg-2 col-sm-12">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    <Image fluid alt={firstOffer.title} src={`images/${firstOffer.id}-img-min.jpg`} />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <Image fluid alt={secondOffer.title} src={`images/${secondOffer.id}-img-min.jpg`} />
                                </Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    <Image fluid alt={thirdOffer.title} src={`images/${thirdOffer.id}-img-min.jpg`} />
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Col md={9}>
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

                                <Tab.Pane
                                    eventKey='third'>
                                    <ProductCard
                                        product={thirdOffer}
                                        onAddToCart={addToCart}
                                    />
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </section>

    )
}

const mapStateToProps = state => {
    return {
        weekOffer: state.weekOffer
    }
}

const mapDispatchToProps = {
    addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(OfferSection);