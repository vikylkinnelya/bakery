import React from 'react';
import { FullHeaderContainer } from '../details/index';
import { Col, Container, Row, Pagination } from 'react-bootstrap';
import './styles.css'

const About = () => {

    return (
        <>
            <FullHeaderContainer title={'About'} descr={'What is our company worth for'} />

            <Container>

                <section id="quote-section">
                    <div className="quote">
                        We work all the time with our customers and together we are able to create beautifull and amazing things that surely brings positive results and complete satisfaction.
                        </div>
                </section>

                <section id="about-section">
                    <div className="section-content">

                        <header className="section-header">
                            <h1>About Bakery &amp; cakery</h1>
                            <p>See our big range of departaments, whe offer a lot of attention to our patients<br />
                                    see what fits you and give us a call</p>
                        </header>


                        <Row className='sucsess-row'>

                            <Col sm={12} md={6} >
                                <img className="img-responsive sucsess-page-img" alt="pastries" src="./images/about-page.jpg" />
                            </Col>

                            <Col sm={12} md={6}>
                                <article>
                                    <div className="article-header-2 sucsess">
                                        <h1>The Story Of Our Success</h1>
                                    </div>
                                    <p>
                                        PAUL is a French chain of café restaurants which have been baking bread since 1889. We specialize in serving high-quality French products including sandwiches, croissants, cakes, pastries, coffee, and more.
								        </p>
                                    <div className="margin-20"></div>
                                    <p>
                                        We made our entry into the great central plaza early in the afternoon. There were no enthusiastic friendly greetings for the returned expedition. Those who chanced to be in sight spoke the names of warriors or women with whom they came in direct contact, in the formal greeting of their kind.
                               	        </p>
                                </article>

                                <Row className='checks'>

                                    <Col sm={{ span: 5, offset: 1 }} className="item-check">Quality at Heart</Col>
                                    <Col sm={{ span: 5, offset: 1 }} className="item-check">Passion for Bread</Col>
                                    <Col sm={{ span: 5, offset: 1 }} className="item-check">French Tradition</Col>
                                    <Col sm={{ span: 5, offset: 1 }} className="item-check">Family-Owned Company</Col>
                                </Row>


                            </Col>
                        </Row>

                        <Row id="video-section" className="section-content container">
                            <Col lg={12}> <h2 className="heading-huge">Video presentation</h2></Col>

                            <Col lg={6} className='video-col'>
                                <div className="embed-responsive embed-responsive-4by3">
                                    <iframe title='video' src="http://www.youtube.com/embed/Xit0QEeE7H8" frameBorder="0"></iframe>
                                </div>


                            </Col>

                            <Col lg={6} className='video-col'>
                                <div class="embed-responsive embed-responsive-4by3">
                                    <iframe title='video' src="http://www.youtube.com/embed/EGbNI26PPYg" frameBorder="0"></iframe>
                                </div>
                            </Col>

                        </Row>

                    </div>
                </section>

            </Container>

        </>
    )
}

export default About;