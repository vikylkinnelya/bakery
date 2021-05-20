import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './style.css'

const Header = () => {
    return (
        <header className='page-header'>
            <Row id="nav-top" className="nav-top" >
                <Col md={2} lg={1} className='col'>
                    <Link to='/'> Home</Link>
                </Col>
                <Col md={2} lg={1} className='col'>
                    <Link to='/about'> About</Link>
                </Col>
                <Col md={2} className='col'>
                    <img className="logo-primary" src='./logo.png' id="logo-1" alt="Bakery" />
                </Col>
                <Col md={2} lg={1} className='col'>
                    <Link to='/contact'>Contact</Link>
                </Col>
                <Col md={2} lg={1} className='col'>
                    <Link to='/shop/all'>Shop</Link>
                </Col>

                <Link to='/cart'>
                    <i class="fas fa-shopping-cart"> </i>
                </Link>



            </Row>

        </header >
    )
}


export default Header;