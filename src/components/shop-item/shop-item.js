import React from 'react';
import { Col, Container, Row, Pagination } from 'react-bootstrap'

const ShopItem = ({ menuItem }) => {
  
    const {name, description, price } = menuItem

    const productLabel = <div className="product-label-container-alt">
        <div className="product-label">
            {menuItem.label}
        </div>
        <div className="product-label-bottom"></div>
    </div>

    return (

        < Col className="product" >
            <div className="product-preview">
                <img alt={name} src={menuItem.image} />
            </div>

            <div className="product-detail-container">

                <div className="product-icons">
                    <button className="product-icon-container">
                        <i className="fa fa-shopping-cart" />
                    </button>
                    <button className="product-icon-container">
                        <i className="fa fa-heart"></i>
                    </button>
                </div>
                <div className="product-detail">
                    <p className="product-price">${price}</p>
                </div>
            </div>

            { menuItem.label && productLabel}

        </ Col>

    )
}

export default ShopItem