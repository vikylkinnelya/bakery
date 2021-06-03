import React from 'react';
import { FullHeaderContainer } from '../details/index';
import { Col, Container, Row, Pagination } from 'react-bootstrap';
import { FormForFeedback } from '../forms';
import './styles.css'

const Contact = () => {

    return (
        <>
            <FullHeaderContainer title={'Contact'} descr={'Say something!'} />


            <Container>

                <div className="content-box">

                    <div className="google-map-big-container onscroll-animate">
                        <div className="google-map">
                            <div id="map-canvas" className='embed-responsive embed-responsive-4by3'>
                                <iframe title='google-map' rel='preconnect'
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.3995335296822!2d-80.13511468497848!3d25.79038998362377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b485225f46d7%3A0x5ddb241a3d25a151!2zNDUwIExpbmNvbG4gUmQsIE1pYW1pIEJlYWNoLCBGTCAzMzEzOSwg0KHQqNCQ!5e0!3m2!1sru!2sby!4v1622555900769!5m2!1sru!2sby"
                                    width="800" height="600"
                                    style={{ border: 0 }} allowFullScreen=""
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>


                    <Row >
                        <Col md={8} className='bakery-form contact-form'>
                            <FormForFeedback />
                        </Col>
                        <Col md={4}>
                            <article>
                                <div className="article-header">
                                    <h1>Contact</h1>
                                </div>
                                <p>He turned, stared, bawled something about "crawling out in a thing like a dish cover," and ran on to the gate of the house at the crest. A sudden whirl of black smoke driving across the road hid him for a moment.</p>
                                <div className="margin-20"></div>
                                <p>T: 0 800 500 55 123 465</p>
                                <p>A: Johny Bravo, Street Number, City</p>
                                <p>E: info@yourdomain.com</p>
                            </article>
                            <div className="margin-10"></div>


                            <article>
                                <div className="article-header">
                                    <h1>Socialize</h1>
                                </div>
                                <div className="social-icon-container-alt">
                                    <a href="https://www.facebook.com/">
                                        <img src='../images/icons/facebook.svg' alt='facebook' />
                                    </a>
                                </div>
                                <div className="social-icon-container-alt">
                                    <a href="https://twitter.com/">
                                        <img src='../images/icons/twitter.svg' alt='twitter' />
                                    </a>
                                </div>
                                <div className="social-icon-container-alt">
                                    <a href="https://www.instagram.com/">
                                        <img src='../images/icons/instagram.svg' alt='instagram' />
                                    </a>
                                </div>
                                <div className="social-icon-container-alt">
                                    <a href="https://www.youtube.com/">
                                        <img src='../images/icons/youtube.svg' alt='youtube' />
                                    </a>
                                </div>
                                <div className="social-icon-container-alt">
                                    <a href="https://www.linkedin.com/">
                                        <img src='../images/icons/linkedin.svg' alt='linkedin' />
                                    </a>
                                </div>
                            </article>
                        </Col>
                    </Row>
                </div>



            </Container>
        </>
    )
}


export default Contact
