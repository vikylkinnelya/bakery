import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './clients.css'

const ClientsSection = () => {
    return (
        <section id="clients-section">
            <header className="section-header">
                <h1>Our trustworthy clients</h1>
                <p>The companies that trust us are the main key to our succes, check out our top clients</p>
            </header>
            <Row className='clients-row'>
                <Col xs={6} md={2} className="client-logo">
                    <LazyLoadImage
                        alt='client 1'
                        delayTime={300}
                        effect="blur"
                        src={`./images/clients/client1.png`}
                    />
                </Col>
                <Col xs={6} md={2} className="client-logo" >
                    <LazyLoadImage
                        alt='client 5'
                        delayTime={350}
                        effect="blur"
                        src={`./images/clients/client5.png`}
                    />
                </Col>

                <Col xs={6} md={2} className="client-logo">
                    <LazyLoadImage
                        alt='client 2'
                        delayTime={400}
                        effect="blur"
                        src={`./images/clients/client2.png`}
                    />
                </Col>
                <Col xs={6} md={2} className="client-logo">
                    <LazyLoadImage
                        alt='client 3'
                        delayTime={450}
                        effect="blur"
                        src={`./images/clients/client3.png`}
                    />
                </Col>
                <Col xs={6} md={2} className="client-logo">
                    <LazyLoadImage
                        alt='client 4'
                        delayTime={500}
                        effect="blur"
                        src={`./images/clients/client4.png`}
                    />
                </Col>
            </Row>
        </section>
    )
}

export default ClientsSection


