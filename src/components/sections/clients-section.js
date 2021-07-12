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
                <Col xs={6} sm={4} md={3} lg={2} className="client-logo">
                    <LazyLoadImage
                        alt='Salomon'
                        delayTime={300}
                        effect="blur"
                        src={`./images/clients/client1.png`}
                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2} className="client-logo" >
                    <LazyLoadImage
                        alt='Acura'
                        delayTime={350}
                        effect="blur"
                        src={`./images/clients/client5.png`}
                    />
                </Col>

                <Col xs={6} sm={4} md={3} lg={2} className="client-logo">
                    <LazyLoadImage
                        alt='Baldwin'
                        delayTime={400}
                        effect="blur"
                        src={`./images/clients/client2.png`}
                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2} className="client-logo">
                    <LazyLoadImage
                        alt='Geico'
                        delayTime={450}
                        effect="blur"
                        src={`./images/clients/client3.png`}
                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2} className="client-logo">
                    <LazyLoadImage
                        alt='Powerplay'
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


