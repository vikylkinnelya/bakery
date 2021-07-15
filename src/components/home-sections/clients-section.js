import { Col, Row, Image } from 'react-bootstrap';


const ClientsSection = () => {
    return (
        <section id="clients-section">
            <header className="section-header">
                <h1>Our trustworthy clients</h1>
                <p>The companies that trust us are the main key to our succes, check out our top clients</p>
            </header>
            <Row className='clients-row'>
                <Col xs={6} sm={4} md={3} lg={2}>
                    <Image fluid
                        alt="Salomon"
                        src="/images/client1-min.png"
                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2} >
                    <img
                        alt="Acura"
                        src="/images/client5-min.png"
                    />
                </Col>

                <Col xs={6} sm={4} md={3} lg={2}>
                    <img
                        alt="Baldwin"
                        src="/images/client2-min.png"
                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                    <img
                        alt="Geico"
                        src="/images/client3-min.png"
                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                    <img
                        alt="Powerplay"
                        src="/images/client4-min.png"
                    />
                </Col>
            </Row>
        </section>
    )
}

export default ClientsSection


