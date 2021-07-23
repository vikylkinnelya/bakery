import { ContactsArticle, SocialLinks } from '../small-comp';
import { Col, Row, Container } from 'react-bootstrap';
import { SubscribeForm } from '../forms';

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="footer-light">
                <Container>
                    <Row className='first-footer-row'>
                        <Col md={5}>
                            <h4>About</h4>
                            <p>
                                Our Bakery is a small independent artisan bakery based in Florida specializes in serving French products including
                                breads, sandwiches, pastries, bakery and lots more, all baked on site, from scratch by skilled passionate bakers.
                            </p>
                        </Col>
                        <Col md={2} className="image-container">
                            <img alt="logo" src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/pages%2Ffooter-logo.svg?alt=media&token=cc342267-b5ab-4a76-82a2-30186f11c513" />
                        </Col>
                        <Col md={5} >
                            <SubscribeForm />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footer-dark">
                <Container >
                    <Row className='footer-info-row'>
                        <Col xs={12} sm={6} lg={3} >
                            <h4>Working Time</h4>
                            <p>
                                Monday Friday:
                                <span className="highlight"><time>07:00 am - 10:00 pm</time></span><br />
                                Saturday Sunday:
                                <span className="highlight"><time>07:30 am - 10:00 pm</time></span>
                            </p>
                        </Col>
                        <Col xs={12} sm={6} lg={3} >
                            <h4>Happy Hours</h4>
                            <p>
                                Join us for Happy Hour!<br />
                                Enjoy discount baked goods.<br />
                                <span className="highlight"><time>9:00 pm - 10:00 pm</time> Daily</span>
                            </p>
                        </Col>
                        <Col xs={12} sm={6} lg={3} >
                            <h4>Follow Us</h4>
                            <SocialLinks />
                        </Col>
                        <Col xs={12} sm={6} lg={3}>
                            <h4>Contact Us</h4>
                            <ContactsArticle />
                        </Col>
                        <p className="site-info">2021 All rights reserved</p>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
