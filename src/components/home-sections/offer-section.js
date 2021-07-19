import { Col, Row, Tab, Nav, Image } from 'react-bootstrap';
import ProductCard from '../product-card';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import { addToCart, setWeekOffer } from '../../actions';

const OfferSection = ({ weekOfferItems, addToCart, RestoService }) => {

    const getURL = (id, attribute) => {
        RestoService.getImg('menu', id)
            .then(url => {
                let img = document.getElementById(attribute)
                img.setAttribute('src', url)
            })
    }
    getURL(weekOfferItems[0].id, 'firstOffer')
    getURL(weekOfferItems[1].id, 'secondOffer')

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

                    {weekOfferItems.length > 0 && weekOfferItems !== null &&

                        <Tab.Container id='left-tabs' defaultActiveKey="first" >
                            <Col xs={12} md={3} lg={2} className='nav-link-col'>
                                <Nav>
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            <Image fluid alt='first offer' id='firstOffer' />
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            <Image fluid alt='second offer' id='secondOffer' />
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>

                            <Col md={8} lg={9}>
                                <Tab.Content>
                                    <Tab.Pane
                                        eventKey='first'>
                                        <ProductCard
                                            product={weekOfferItems[0]}
                                            onAddToCart={addToCart}
                                        />
                                    </Tab.Pane>
                                    <Tab.Pane
                                        eventKey='second'>
                                        <ProductCard
                                            product={weekOfferItems[1]}
                                            onAddToCart={addToCart}
                                        />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Tab.Container>}
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
    addToCart, setWeekOffer
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(OfferSection));