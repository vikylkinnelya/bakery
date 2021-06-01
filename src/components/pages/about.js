import React from 'react';
import { FullHeaderContainer } from '../details/index';
import { Col, Container, Row, Pagination } from 'react-bootstrap';


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

                        <Row>

                            <Col md={6} className="onscroll-animate">
                                <img className="img-responsive" alt="cup and logo" src="./images/cup_and_logo.png" />
                            </Col>

                            <Col md={6} className=" onscroll-animate" data-delay="400">
                                <article>
                                    <div className="article-header-2">
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

                                <div className="margin-20"></div>

                                <Row>
                                    <Col xs={6}>
                                        <div className="item-check">Quality at Heart</div>
                                        <div className="item-check">Passion for Bread</div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="item-check">French Tradition</div>
                                        <div className="item-check">Family-Owned Company</div>
                                    </Col>
                                </Row>

                                <div className="margin-70"></div>
                            </Col>

                            <Col id="video-section" className="section-white-cover parallax-background">

                                <div className="section-content">
                                    <div className="onscroll-animate">
                                        <div className="margin-40"></div>
                                        <h2 className="heading-huge">Video presentation</h2>
                                        <div className="margin-20"></div>

                                        <div className="embed-responsive embed-responsive-4by3">
                                            <iframe title='video' className="embed-responsive-item bakery-video" src="http://www.youtube.com/embed/OhtG_XahQco" frameBorder="0" allowFullScreen="allowfullscreen"></iframe>
                                        </div>
                                        <div className="margin-30"></div>
                                    </div>
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