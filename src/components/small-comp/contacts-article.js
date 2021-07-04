import React from 'react';

const ContactsArticle = () => {
    return (
        <>
            <div className="icon-opening-wrapper">
                <div className="icon-opening-container">
                    <p className="icon-opening-content"><i className="fa fa-phone"></i>
                        <a href='tel:+13055311200'> +1 305-531-1200</a>
                    </p>
                </div>
            </div>
            <div className="icon-opening-wrapper">
                <div className="icon-opening-container">
                    <address className="icon-opening-content"><i className="fa fa-location-arrow"></i>
                          450 Lincoln Rd
                        Miami Beach, FL 33139</address>
                </div>
            </div>
            <div className="icon-opening-wrapper">
                <div className="icon-opening-container">
                    <p className="icon-opening-content"><i className="fa fa-envelope"></i>
                        <a href='mailto:info@paulusa.com'> info@paulusa.com</a>
                    </p>
                </div>
            </div>
            <div className="icon-opening-wrapper">
                <div className="icon-opening-container">
                    <p className="icon-opening-content"><i className="fa fa-globe"></i>
                        <a href='https://www.pauldmv.com/'> www.pauldmv.com</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ContactsArticle;