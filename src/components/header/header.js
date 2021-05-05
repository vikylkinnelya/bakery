import React from 'react';

const Header = () => {
    return (
        <header classNameName='page-header'>
            <div classNameName="page-header-content container">

                <div id="nav-top" classNameName="nav-top">

                    <ul>
                        <li><a href="./">Home</a></li>
                        <li><a href="about.html">About</a></li>
                    </ul>

                    <img className="logo-primary" src={"./images/logo.png"} id="logo-1" alt="Bakery" />
                    <ul>
                        <li><a href="menus.html">Shop</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>

                </div>
            </div>
        </header>
    )
}


export default Header;