import React from 'react';

const ContactsArticle = () => {
    return (
        <article>
            <div className="article-header">
                <h1>Contact</h1>
            </div>
            <div className="icon-opening-wrapper">
                <div className="icon-opening-container">
                    <p className="icon-opening"><i className="fa fa-phone"></i></p>
                    <p className="icon-opening-content">
                        <a href='tel:+13055311200'>+1 305-531-1200</a>
                    </p>
                </div>
            </div>
            <div className="icon-opening-wrapper">
                <div className="icon-opening-container">
                    <p className="icon-opening"><i className="fa fa-location-arrow"></i></p>
                    <address className="icon-opening-content">450 Lincoln Rd
                        Miami Beach, FL 33139</address>
                </div>
            </div>
            <div className="icon-opening-wrapper">
                <div className="icon-opening-container">
                    <p className="icon-opening"><i className="fa fa-envelope"></i></p>
                    <p className="icon-opening-content">
                        <a href='mailto:info@paulusa.com'>info@paulusa.com</a>
                    </p>
                </div>
            </div>
            <div className="icon-opening-wrapper">
                <div className="icon-opening-container">
                    <p className="icon-opening"><i className="fa fa-globe"></i></p>
                    <p className="icon-opening-content">
                        <a href='https://www.pauldmv.com/'>www.pauldmv.com</a>
                    </p>
                </div>
            </div>
        </article>
    )
}

export default ContactsArticle;