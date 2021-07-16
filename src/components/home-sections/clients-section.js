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
                        src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/clients%2Fclient1.png?alt=media&token=75b426b0-1102-45c0-838a-fd3e937ef3ff"
                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2} >
                    <img
                        alt="Acura"
                        src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/clients%2Fclient5.png?alt=media&token=a70ebab1-18a9-413c-9f5e-52d40e5d47f0"
                    />
                </Col>

                <Col xs={6} sm={4} md={3} lg={2}>
                    <img
                        alt="Baldwin"
                        src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/clients%2Fclient2.png?alt=media&token=2a94996a-c8b8-4a35-9f25-c21f374ccdc0"
                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                    <img
                        alt="Geico"
                        src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/clients%2Fclient3.png?alt=media&token=e1c0cd8c-aed0-4cef-96a6-450158e24358"
                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2}>
                    <img
                        alt="Powerplay"
                        src="https://firebasestorage.googleapis.com/v0/b/bakery-23677.appspot.com/o/clients%2Fclient4.png?alt=media&token=ea09d9ee-29e8-438c-bf7a-487ed23a335a"
                    />
                </Col>
            </Row>
        </section>
    )
}

export default ClientsSection


