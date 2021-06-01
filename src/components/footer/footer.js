import React from 'react';
import './styles.css';
import { Col, Row, Container } from 'react-bootstrap';
import { FormForSubscribe } from '../forms';

const Footer = () => {

    return (
        <footer className="page-footer">
            <div className="footer-light">
                <Container>
                    <Row>
                        <Col md={5} className=" slim-right onscroll-animate">
                            <h4>About</h4>
                            <p>Bakery is a PSD Template with great options and a lot of features. But it may possibly be conceived that, in the internal parts of the whale, in his anatomy there, at least, we shall be able to hit.</p>
                            <div className="margin-50"></div>
                        </Col>
                        <Col md={2} className="image-container">
                            <img alt="logo" src="../logo2.png" />
                            <div className="margin-50"></div>
                        </Col>

                        <Col md={5} className="slim-left onscroll-animate" data-delay="400">
                            <h4>Newsletter</h4>
                            <p>Give us your email, and we shall send regular updates for new stuff and events.</p>
                            <FormForSubscribe />
                            <div className="margin-50"></div>
                        </Col>
                    </Row>

                </Container>
            </div>

            <div className="footer-dark">
                <Container >
                    <Row >
                        <Col md={6}>
                            <Row >
                                <Col sm={6} className="footer-column onscroll-animate">
                                    <h4>Working Time</h4>
                                    <p>
                                        Monday Friday:
                                        <span className="highlight"><time>07:00 am - 10:00 pm</time></span><br />
                                        Saturday Sunday:
                                        <span className="highlight"><time>07:30 am - 10:00 pm</time></span>
                                    </p>
                                    <div className="margin-40"></div>
                                </Col>
                                <Col sm={6} className="footer-column onscroll-animate" data-delay="300">
                                    <h4>Happy Hours</h4>
                                    <p>
                                        Join us for Happy Hour!<br />
                                        Enjoy discount baked goods.<br />
                                        <span className="highlight"><time>9:00 pm - 10:00 pm</time> Daily</span>
                                    </p>
                                    <div className="margin-40"></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row >
                                <Col sm={6} className="footer-column onscroll-animate" data-delay="400">
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
                                    <div className="margin-40"></div>
                                </Col>
                                <Col sm={6} className="footer-column onscroll-animate" data-delay="500">
                                    <h4>Contact Us</h4>
                                    <div className="icon-opening-wrapper">
                                        <div className="icon-opening-container">
                                            <p className="icon-opening"><i className="fa fa-phone"></i></p>
                                            <p className="icon-opening-content"><a href='tel:+13055311200'>+1 305-531-1200</a> </p>
                                        </div>
                                    </div>
                                    <div className="icon-opening-wrapper">
                                        <div className="icon-opening-container">
                                            <p className="icon-opening"><i className="fa fa-location-arrow"></i></p>
                                            <address className="icon-opening-content">450 Lincoln Rd<br />
                                            Miami Beach, FL 33139</address>
                                        </div>
                                    </div>
                                    <div className="icon-opening-wrapper">
                                        <div className="icon-opening-container">
                                            <p className="icon-opening"><i className="fa fa-envelope"></i></p>
                                            <p className="icon-opening-content"><a href='mailto:info@paulusa.com'>info@paulusa.com</a></p>
                                        </div>
                                    </div>
                                    <div className="icon-opening-wrapper">
                                        <div className="icon-opening-container">
                                            <p className="icon-opening"><i className="fa fa-globe"></i></p>
                                            <p className="icon-opening-content"><a href='https://www.pauldmv.com/'>www.pauldmv.com</a></p>
                                        </div>
                                    </div>
                                    <div className="margin-40"></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <p className="site-info">2014 All rights reserved, Powered by IgnitionThemes</p>
                    <a href="#all" className="to-top scroll-to"></a>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;