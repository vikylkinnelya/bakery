import React, { Component } from 'react';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { FeedbackForm } from '../forms';
import { setLoading, setError } from '../../actions';
import './contact.css'

class ContactSection extends Component {

    state = {
        feedback: false,
        respMsgIsShown: false,
    }

    setFeedbackData = (data) => {
        this.setState({ feedback: data })
    }
    setResponseMessage = () => {
        this.setState({ respMsgIsShown: true })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const { RestoService, setLoading, setError } = this.props

        if (this.state.feedback !== prevState.feedback) {
            setLoading(true)
            RestoService.setFeedback(this.state.feedback)
                .catch(error => setError(error))
            setLoading(false)
        }
    }

    render() {
        return (
            <section id="contact-section">
                <div className="section-content">
                    <Col md={4} className='main-contact-form' >
                        <div className="article-header">
                            <h2>CONTACT US</h2>
                            <p>Our Company is the best, meet the creative team that never sleeps. Say something to us we will answer to you.</p>
                        </div>

                        <FeedbackForm
                            className='form-contact'
                            reason={'feedback'}
                            page={'main'}
                            setFeedbackData={this.setFeedbackData}
                            setResponseMessage={this.setResponseMessage}
                        />
                    </Col>
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
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchToProps = {
    setLoading,
    setError
}


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(ContactSection))