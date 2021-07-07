import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Col, Navbar, Image } from 'react-bootstrap';
import './styles.css'

const Header = ({ cart, cartTotalPrice, expanded }) => {

    const [collapsed, setCollapse] = useState(false)

    const empty = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#684f40" className="bi bi-basket3" viewBox="0 0 16 16">
        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
    </svg>

    const filled = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#684f40" className="bi bi-basket2-fill" viewBox="0 0 16 16">
        <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
    </svg>

    const basket =
        <>
            {cart.length > 0 ? filled : empty}
            <h6>{cartTotalPrice.toFixed(2)}$</h6>
        </>

    return (
        <Navbar collapseOnSelect expand="sm" className='page-header row' onChange={() => setCollapse(!collapsed)}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav " className='nav-top row' >

                <Col xs={{ span: 4, order: 1 }} md={{ span: 'auto', order: 1 }} ><NavLink activeClassName="selected" to='/about' aria-label='About'> About</NavLink></Col>
                <Col xs={{ span: 4, order: 3 }} md={{ span: 'auto', order: 2 }} ><NavLink activeClassName="selected" to='/contact' aria-label='Contact'>Contact</NavLink></Col>

                <Col xs={{ span: 4, order: 2 }} md={{ span: 'auto', order: 3 }} className='col logo-col' >
                    <NavLink to='/home' activeClassName="selected" aria-label='home' title='Home'>
                        <Image fluid className="logo-primary" src='images/header-logo.svg' id="logo-1" alt="Bakery logo" />
                    </NavLink>
                </Col >

                <Col xs={{ span: 4, order: 4 }} md={{ span: 'auto', order: 4 }} > <NavLink activeClassName="selected" to='/shop/all' aria-label='Menu'>Menu</NavLink></Col >

                <Col xs={{ span: 4, order: 5 }} md={{ span: 'auto', order: 5 }} >
                    <NavLink activeClassName="selected" to='/cart' className='basket-link' aria-label='Cart' title='Cart'>
                        {basket}
                    </NavLink>
                </Col >

            </Navbar.Collapse >


        </Navbar >

    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        cartTotalPrice: state.cartTotalPrice
    }
}


export default connect(mapStateToProps)(Header)