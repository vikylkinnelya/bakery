import React from 'react';
import './styles.css';
import { Col, Row, Container } from 'react-bootstrap';

const Footer = () => {

    return (

        <footer class="page-footer">
            <div class="footer-light">
                <Container>
                    <Row>
                        <Col md={5} class=" slim-right onscroll-animate">
                            <h4>About</h4>
                            <p>Bakery is a PSD Template with great options and a lot of features. But it may possibly be conceived that, in the internal parts of the whale, in his anatomy there, at least, we shall be able to hit.</p>
                            <div class="margin-50"></div>
                        </Col>
                        <Col md={2} class="image-container">
                            <img alt="logo" src="images/logo2.png" />
                            <div class="margin-50"></div>
                        </Col>
                        <Col md={5} class="slim-left onscroll-animate" data-delay="400">
                            <h4>Newsletter</h4>
                            <p>Give us your email, and we shall send regular updates for new stuff and events.</p>

                            <form class="form-subscribe" id="rss-subscribe" action="save_rss.php" method="post" data-email-not-set-msg="Email must be set" data-ajax-fail-msg="Ajax could not set the request" data-success-msg="Email successfully added">
                                <div class="email-container">
                                    <input type="text" name="email" />
                                </div>
                                <div class="submit-container">
                                    <input type="submit" value="Subscribe" />
                                </div>
                                <p class="return-msg"></p>
                            </form>
                            <div class="margin-50"></div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div class="footer-dark">
                <Container >
                    <Row >
                        <Col md={6}>
                            <Row >
                                <Col sm={6} class="footer-column onscroll-animate">
                                    <h4>Working Time</h4>
                                    <p>
                                        Monday Friday: <span class="highlight">08:00 am - 08:30 pm</span><br />
                                                        Saturday Sunday: <span class="highlight">10:00 am - 16:30 pm</span>
                                    </p>
                                    <div class="margin-40"></div>
                                </Col>
                                <Col sm={6} class="footer-column onscroll-animate" data-delay="300">
                                    <h4>Happy Hours</h4>
                                    <p>
                                        Join us for Happy Hour!<br />
                                                            Enjoy discount baked goods.<br />
                                        <span class="highlight">8:00 pm-5:00 pm Daily</span>
                                    </p>
                                    <div class="margin-40"></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row >
                                <Col sm={6} class="footer-column onscroll-animate" data-delay="400">
                                    <h4>Follow Us</h4>
                                    <div class="social-icon-container">
                                        <a href="#"><i class="fa fa-facebook"></i></a>
                                    </div>
                                    <div class="social-icon-container">
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                    </div>
                                    <div class="social-icon-container">
                                        <a href="#"><i class="fa fa-rss"></i></a>
                                    </div>
                                    <div class="social-icon-container">
                                        <a href="#"><i class="fa fa-pinterest"></i></a>
                                    </div>
                                    <div class="social-icon-container">
                                        <a href="#"><i class="fa fa-linkedin"></i></a>
                                    </div>
                                    <div class="margin-40"></div>
                                </Col>
                                <Col sm={6} class="footer-column onscroll-animate" data-delay="500">
                                    <h4>Contact Us</h4>
                                    <div class="icon-opening-wrapper">
                                        <div class="icon-opening-container">
                                            <p class="icon-opening"><i class="fa fa-phone"></i></p>
                                            <p class="icon-opening-content">0 800 123 456 88</p>
                                        </div>
                                    </div>
                                    <div class="icon-opening-wrapper">
                                        <div class="icon-opening-container">
                                            <p class="icon-opening"><i class="fa fa-location-arrow"></i></p>
                                            <p class="icon-opening-content">257 Charlington Gates<br />
                                                                        Road Morrison, Nr. 568</p>
                                        </div>
                                    </div>
                                    <div class="icon-opening-wrapper">
                                        <div class="icon-opening-container">
                                            <p class="icon-opening"><i class="fa fa-envelope"></i></p>
                                            <p class="icon-opening-content">info@bakeytemplate.com</p>
                                        </div>
                                    </div>
                                    <div class="icon-opening-wrapper">
                                        <div class="icon-opening-container">
                                            <p class="icon-opening"><i class="fa fa-globe"></i></p>
                                            <p class="icon-opening-content">www.bakeytemplate.com</p>
                                        </div>
                                    </div>
                                    <div class="margin-40"></div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <p class="site-info">2014 All rights reserved, Powered by IgnitionThemes</p>
                    <a href="#all" class="to-top scroll-to"></a>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;