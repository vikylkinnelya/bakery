import React, { Component } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { PageHeader, ContactsArticle, SocialLinks } from '../small-comp';
import { Col, Container, Row } from 'react-bootstrap';
import WithRestoService from '../hoc';
import { FeedbackForm } from '../forms';

import './styles.css'

class Contact extends Component {

    state = {
        feedback: false,
        respMsgIsShown: false
    }

    setFeedbackData = (data) => {
        this.setState({ feedback: data })
    }
    setResponseMessage = () => {
        this.setState({ respMsgIsShown: true })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { RestoService } = this.props

        if (this.state.feedback !== prevState.feedback) {
            RestoService.setFeedback(this.state.feedback)
        }
    }


    render() {
        //const { loading, error } = this.props

        return (
            <>
                <PageHeader title={'Contact'} descr={'Say something!'} />

                <Container>
                    <div className="content-box">
                        <LazyLoadComponent>
                            <div className="google-map-big-container">
                                <div className="google-map">
                                    <div id="map-canvas" className='embed-responsive embed-responsive-4by3'>
                                        <iframe title='google-map' rel='preconnect'
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3995335296822!2d-80.13511468497848!3d25.79038998362377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b485225f46d7%3A0x5ddb241a3d25a151!2zNDUwIExpbmNvbG4gUmQsIE1pYW1pIEJlYWNoLCBGTCAzMzEzOSwg0KHQqNCQ!5e0!3m2!1sru!2sby!4v1622555900769!5m2!1sru!2sby"
                                            style={{ border: 0 }} allowFullScreen=""
                                            loading="lazy">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                        </LazyLoadComponent>

                        <Row >
                            <Col md={8} className='bakery-form contact-form'>
                                <div className="article-header">
                                    <h1>LEAVE US A MESSAGE</h1>
                                    <p>Please fill in the form below and we’ll be in touch shorty. Thank you for visiting Our Bakery</p>
                                </div>
                                <FeedbackForm
                                    reason={'feedback'}
                                    page={'contact'}
                                    feedback={this.state.feedback}
                                    setFeedbackData={this.setFeedbackData}
                                    setResponseMessage={this.setResponseMessage}
                                />
                            </Col>
                            <Col md={4}>
                                <article>
                                    <div className="article-header">
                                        <h1>Working Time</h1>
                                    </div>
                                    <p>
                                        Monday Friday:
                                        <time> 07:00 am - 10:00 pm</time><br />
                                        Saturday Sunday:
                                        <time> 07:30 am - 10:00 pm</time>
                                    </p>
                                </article>
                                <article>
                                    <div className="article-header">
                                        <h1>Contact</h1>
                                    </div>
                                    <ContactsArticle />
                                </article>
                                <article>
                                    <div className="article-header">
                                        <h1>Socialize</h1>
                                    </div>
                                    <SocialLinks classN='-alt' />
                                </article>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </>
        )
    }
}


/* const mapStateToProps = state => {
    return {
                    loading: state.loading,
                error: state.error
    }
} */



export default WithRestoService()(Contact)

