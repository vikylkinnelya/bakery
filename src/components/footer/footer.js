import React from 'react';
import './styles.css';
import { Col, Row, Container } from 'react-bootstrap';

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
                            <img alt="logo" src="images/logo2.png" />
                            <div className="margin-50"></div>
                        </Col>
                        <Col md={5} className="slim-left onscroll-animate" data-delay="400">
                            <h4>Newsletter</h4>
                            <p>Give us your email, and we shall send regular updates for new stuff and events.</p>

                            <form className="form-subscribe" id="rss-subscribe" action="save_rss.php" method="post" data-email-not-set-msg="Email must be set" data-ajax-fail-msg="Ajax could not set the request" data-success-msg="Email successfully added">
                                <div className="email-container">
                                    <input type="text" name="email" />
                                </div>
                                <div className="submit-container">
                                    <input type="submit" value="Subscribe" />
                                </div>
                                <p className="return-msg"></p>
                            </form>
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
                                        Monday Friday: <span className="highlight">08:00 am - 08:30 pm</span><br />
                                                        Saturday Sunday: <span className="highlight">10:00 am - 16:30 pm</span>
                                    </p>
                                    <div className="margin-40"></div>
                                </Col>
                                <Col sm={6} className="footer-column onscroll-animate" data-delay="300">
                                    <h4>Happy Hours</h4>
                                    <p>
                                        Join us for Happy Hour!<br />
                                                            Enjoy discount baked goods.<br />
                                        <span className="highlight">8:00 pm-5:00 pm Daily</span>
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
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                    </div>
                                    <div className="social-icon-container">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                    </div>
                                    <div className="social-icon-container">
                                        <a href="#"><i className="fa fa-rss"></i></a>
                                    </div>
                                    <div className="social-icon-container">
                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    <div className="social-icon-container">
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                    </div>
                                    <div className="margin-40"></div>
                                </Col>
                                <Col sm={6} className="footer-column onscroll-animate" data-delay="500">
                                    <h4>Contact Us</h4>
                                    <div className="icon-opening-wrapper">
                                        <div className="icon-opening-container">
                                            <p className="icon-opening"><i className="fa fa-phone"></i></p>
                                            <p className="icon-opening-content">0 800 123 456 88</p>
                                        </div>
                                    </div>
                                    <div className="icon-opening-wrapper">
                                        <div className="icon-opening-container">
                                            <p className="icon-opening"><i className="fa fa-location-arrow"></i></p>
                                            <p className="icon-opening-content">257 Charlington Gates<br />
                                                                        Road Morrison, Nr. 568</p>
                                        </div>
                                    </div>
                                    <div className="icon-opening-wrapper">
                                        <div className="icon-opening-container">
                                            <p className="icon-opening"><i className="fa fa-envelope"></i></p>
                                            <p className="icon-opening-content">info@bakeytemplate.com</p>
                                        </div>
                                    </div>
                                    <div className="icon-opening-wrapper">
                                        <div className="icon-opening-container">
                                            <p className="icon-opening"><i className="fa fa-globe"></i></p>
                                            <p className="icon-opening-content">www.bakeytemplate.com</p>
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