import React, { Component } from 'react';
import WithRestoService from '../hoc';
//import { withRouter } from "react-router";
import { connect } from 'react-redux';
import './styles.css';
import { Col, Row, Container } from 'react-bootstrap';
import { SubscribeForm } from '../forms';
import ResponseMessage from '../response-message';
import { setLoading, setError } from '../../actions';

class Footer extends Component {

    state = {
        subscriber: false,
        respMsgIsShown: false
    }

    setSubscriberData = (data) => {
        this.setState({ subscriber: data })
    }
    setResponseMessage = () => {
        this.setState({ respMsgIsShown: true })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { RestoService, setError } = this.props

        if (this.state.subscriber !== prevState.subscriber) {
            //setLoading(true)
            RestoService.setSubscriber(this.state.subscriber)
                .catch(error => setError(error))
            //setLoading(false)
        }
    }

    render() {
        return (
            <footer className="page-footer onscroll-animate">
                <div className="footer-light">
                    <Container>
                        <Row className='first-footer-row'>
                            <Col md={5} className=" slim-right">
                                <h4>About</h4>
                                <p>
                                    Our Bakery is a small independent artisan bakery based in Florida specializes in serving French products including
                                    breads, sandwiches, pastries, bakery and lots more, all baked on site, from scratch by skilled passionate bakers.
                                </p>
                            </Col>
                            <Col md={2} className="image-container">
                                <img alt="logo" src="../logo2.png" />
                            </Col>

                            <Col md={5} className="slim-left" >
                                <h4>Newsletter</h4>

                                {!this.state.subscriber &&
                                    <>
                                        <p>Give us your email, and we shall send regular updates for new stuff and events.</p>
                                        <SubscribeForm
                                            setResponseMessage={this.setResponseMessage}
                                            setSubscriberData={this.setSubscriberData} />
                                    </>}

                                {this.state.subscriber && <ResponseMessage reason={'subscribe'} />}

                            </Col>
                        </Row>

                    </Container>
                </div>

                <div className="footer-dark">
                    <Container>
                        <Row >

                            <Col sm={3} >
                                <h4>Working Time</h4>
                                <p>
                                    Monday Friday:
                                    <span className="highlight"><time>07:00 am - 10:00 pm</time></span><br />
                                    Saturday Sunday:
                                    <span className="highlight"><time>07:30 am - 10:00 pm</time></span>
                                </p>
                            </Col>
                            <Col sm={3} >
                                <h4>Happy Hours</h4>
                                <p>
                                    Join us for Happy Hour!<br />
                                    Enjoy discount baked goods.<br />
                                    <span className="highlight"><time>9:00 pm - 10:00 pm</time> Daily</span>
                                </p>
                            </Col>


                            <Col sm={3} >
                                <h4>Follow Us</h4>
                                <div className="social-icon-container">
                                    <a href="https://www.facebook.com/">
                                        <img src='../images/icons/facebook.svg' alt='facebook' />
                                    </a>
                                </div>
                                <div className="social-icon-container">
                                    <a href="https://twitter.com/">
                                        <img src='../images/icons/twitter.svg' alt='twitter' />
                                    </a>
                                </div>
                                <div className="social-icon-container">
                                    <a href="https://www.instagram.com/">
                                        <img src='../images/icons/instagram.svg' alt='instagram' />
                                    </a>
                                </div>
                                <div className="social-icon-container">
                                    <a href="https://www.youtube.com/">
                                        <img src='../images/icons/youtube.svg' alt='youtube' />
                                    </a>
                                </div>
                                <div className="social-icon-container">
                                    <a href="https://www.linkedin.com/">
                                        <img src='../images/icons/linkedin.svg' alt='linkedin' />
                                    </a>
                                </div> 
                            </Col>

                            <Col sm={3}>
                                <h4>Contact Us</h4>
                                <div className="icon-opening-wrapper">
                                    <div className="icon-opening-container">
                                        <p className="icon-opening"><i className="fa fa-phone"></i></p>
                                        <p className="icon-opening-content">
                                            <a href='tel:+13055311200'>+1 305-531-1200</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-opening-wrapper">
                                    <div className="icon-opening-container">
                                        <p className="icon-opening"><i className="fa fa-location-arrow"></i></p>
                                        <address className="icon-opening-content">450 Lincoln Rd 
                                            Miami Beach, FL 33139</address>
                                    </div>
                                </div>
                                <div className="icon-opening-wrapper">
                                    <div className="icon-opening-container">
                                        <p className="icon-opening"><i className="fa fa-envelope"></i></p>
                                        <p className="icon-opening-content">
                                            <a href='mailto:info@paulusa.com'>info@paulusa.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="icon-opening-wrapper">
                                    <div className="icon-opening-container">
                                        <p className="icon-opening"><i className="fa fa-globe"></i></p>
                                        <p className="icon-opening-content">
                                            <a href='https://www.pauldmv.com/'>www.pauldmv.com</a>
                                        </p>
                                    </div>
                                </div>
                            </Col>


                            <p className="site-info">2014 All rights reserved, Powered by IgnitionThemes</p>
                            {/* <a href="#all" className="to-top scroll-to"></a> */}

                        </Row>
                    </Container>
                </div>
            </footer>
        )
    }
}


export default WithRestoService()(Footer)
