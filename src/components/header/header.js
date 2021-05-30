import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Row, Col, Navbar } from 'react-bootstrap';
import './styles.css'

const Header = ({ cart, totalPrice }) => {

    const [collapse, setCollapse] = useState(false)

    const empty = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#684f40" className="bi bi-basket3" viewBox="0 0 16 16">
        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
    </svg>

    const filled = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#684f40" className="bi bi-basket2-fill" viewBox="0 0 16 16">
        <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
    </svg>

    const basket =
        <>
            {cart.length > 0 ? filled : empty}
            <h6>{totalPrice.toFixed(2)}$</h6>
        </>


    return (
        <Navbar collapseOnSelect expand="md" className='page-header'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav " className='nav-top'>

                <Col><NavLink activeClassName="selected" to='/about'> About</NavLink></Col>
                <Col><NavLink activeClassName="selected" to='/contact'>Contact</NavLink></Col>

                <Col className='col logo-col'>
                    <NavLink to='/home'>
                        <img className="logo-primary" src='../logo.png' id="logo-1" alt="Bakery" />
                    </NavLink>
                </Col>

                <Col><NavLink activeClassName="selected" to='/shop/all'>Shop</NavLink></Col>

                <Col>
                    <NavLink activeClassName="selected" to='/cart' className='basket-link'>
                        {basket}
                    </NavLink>
                </Col>

            </Navbar.Collapse>


        </Navbar>

    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        totalPrice: state.totalPrice
    }
}


export default connect(mapStateToProps)(Header)