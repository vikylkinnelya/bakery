import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Col } from 'react-bootstrap';
import './styles.css';

const ShopItem = ({ menuItem, menuType, onAddToCart }) => {

    const { name, description, pricing, type, id } = menuItem

    const productLabel = <div className="product-label-container-alt">
        <div className="product-label">
            {menuItem.label}
        </div>
        <div className="product-label-bottom"></div>
    </div>

    const [priceMenu, setShowPriceMenu] = useState(false)

    const productPrice = pricing[0]
    const productPricing = pricing.length > 1 && pricing.join(' | ')

    const smallSize = priceMenu && pricing.length === 3
        && <button className='small-size' onClick={() => onAddToCart(id, 'S')}> S </button>
    const mediumSize = priceMenu &&
        <button className='medium-size' onClick={() => onAddToCart(id, 'M')}> M </button>
    const bigSize = priceMenu &&
        <button className='big-size' onClick={() => onAddToCart(id, 'L')}> L </button>

    const defCartClick = (id) => {
        if (pricing.length > 1 && !priceMenu) {
            return setShowPriceMenu(!priceMenu)
        }
        if (pricing && priceMenu) {
            return setShowPriceMenu(!priceMenu)
        }
        if (pricing.length === 1) {
            return onAddToCart(id)
        }
    }

    return (

        < Col className="product" sm={2} lg={2}>

            <div className="product-preview">
                <LazyLoadImage
                    effect="blur"
                    alt={name}
                    src={`../../images/shop/${id}-min.jpg`}
                />
            </div>

            <div className="product-detail-container">

                <div className="product-icons">
                    <button className="product-icon-container">
                        <i className="fa fa-heart"></i>
                    </button>

                    <button className="product-icon-container" onClick={() => defCartClick(id)}>
                        {!priceMenu && <i className="fa fa-shopping-cart" />}
                        {priceMenu && pricing && <i className="fas fa-times"></i>}
                    </button>
                    {smallSize}
                    {mediumSize}
                    {bigSize}
                </div>
                <div className="product-detail">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    {menuType === 'all' && <h3>{type}</h3>}
                    <p className="product-price"> $ {productPricing || productPrice} </p>

                </div>
            </div>

            {menuItem.label && productLabel}

        </ Col>

    )
}

export default ShopItem