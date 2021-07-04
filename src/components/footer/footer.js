import React, { Component } from 'react';
import WithRestoService from '../hoc';
//import { withRouter } from "react-router";
import { connect } from 'react-redux';
import './styles.css';
import { ContactsArticle, SocialLinks } from '../small-comp';
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
        const { RestoService, setError, setLoading } = this.props

        if (this.state.subscriber !== prevState.subscriber) {
            setLoading(true)
            RestoService.setSubscriber(this.state.subscriber)
                .catch(error => setError(error))
            //setLoading(false)
        }
    }

    render() {
        return (
            <footer className="page-footer">
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
                                <img alt="logo" src="images/footer-logo.svg" />
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
                            <p className="site-info">2014 All rights reserved, Powered by IgnitionThemes</p>
                            {/* <a href="#all" className="to-top scroll-to"></a> */}
                        </Row>
                    </Container>
                </div>
            </footer>
        )
    }
}

const mapDispatchToProps = {
    setLoading,
    setError,
}
export default WithRestoService()(connect(null,mapDispatchToProps)(Footer))
