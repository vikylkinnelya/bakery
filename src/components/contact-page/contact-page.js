import { ContactsArticle, SocialLinks } from '../small-comp';
import { PageHeader } from '../header';
import { Col, Container, Row } from 'react-bootstrap';
import { FeedbackForm } from '../forms';
import React, { lazy } from 'react';
const GoogleMap = lazy(() => import('../small-comp'))

const Contact = () => {
    return (
        <>
            <PageHeader title={'Contact'} descr={'Say something!'} />
            <Container>
                <div className="content-box">

                    <GoogleMap />

                    <Row >
                        <FeedbackForm type={'page'} />
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
export default Contact

