import React, { useState, useEffect, useCallback } from 'react';
import { Col, Row } from 'react-bootstrap';
import WithRestoService from '../hoc';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './clients.css'

const ClientsSection = ({ RestoService }) => {
    let img

    const getURL = (id) => {
        img = document.getElementById(id)
        RestoService.getImg('clients', id, 'png', '')
            .then(url => {
                img && img.setAttribute('src', url)
            })
    }

    useEffect(() => {
        getURL('client1')
        getURL('client2')
        getURL('client3')
        getURL('client4')
        getURL('client5')
    },  )






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
                        id='client1'
                        
                        effect="blur"

                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2} className="client-logo" >
                    <LazyLoadImage
                        alt='Acura'
                        id='client2'
                        
                        effect="blur"

                    />
                </Col>

                <Col xs={6} sm={4} md={3} lg={2} className="client-logo">
                    <LazyLoadImage
                        alt='Baldwin'
                        id='client3'
                        
                        effect="blur"

                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2} className="client-logo">
                    <LazyLoadImage
                        alt='Geico'
                        id='client4'
                        
                        effect="blur"

                    />
                </Col>
                <Col xs={6} sm={4} md={3} lg={2} className="client-logo">
                    <LazyLoadImage
                        alt='Powerplay'
                        id='client5'
                        
                        effect="blur"

                    />
                </Col>
            </Row>
        </section>
    )
}

export default WithRestoService()(ClientsSection)


