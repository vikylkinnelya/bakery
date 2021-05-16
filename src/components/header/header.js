import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className='page-header'>
            <div className="page-header-content container">

                <div id="nav-top" className="nav-top">

                    <ul>
                        <li><Link to='/'> Home</Link></li>
                        <li><Link to='/about'> About</Link></li>
                    </ul>
                    <img className="logo-primary" src='./logo.png' id="logo-1" alt="Bakery" />
                    <ul>
                        <li><Link to='/shop/all'>Shop</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>

                </div>
            </div>
        </header>
    )
}


export default Header;