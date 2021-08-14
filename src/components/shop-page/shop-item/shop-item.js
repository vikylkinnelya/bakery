import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToCart, showTost, setProductModal } from '../../../actions';

const ShopItem = ({ menuItem, menuType, addToCart, cart, showTost, setProductModal, productModal }) => {

    const { name, description, pricing, type, id, img } = menuItem
    const [priceMenu, setShowPriceMenu] = useState(false)

    const productPrice = pricing[0]
    const productPricing = pricing.length > 1 && pricing.join(' | ')

    const productLabel = <div className="product-label-container-alt">
        <div className="product-label">
            {menuItem.label}
        </div>
        <div className="product-label-bottom"></div>
    </div>

    const addedItem = cart.findIndex(el => el.id === id) !== -1 ? 'added' : null

    const basketBtn = !priceMenu && <i className='fa fa-shopping-cart' />
    const closeSizesBtn = priceMenu && pricing && <i className="fas fa-times"></i>

    const smallSize = priceMenu && pricing.length === 3
        && <button className='small-size' onClick={() => onSizeAdd(id, 'S')} aria-label='small size'> S </button>
    const mediumSize = priceMenu &&
        <button className='medium-size' onClick={() => onSizeAdd(id, 'M')} aria-label='medium size'> M </button>
    const bigSize = priceMenu &&
        <button className='big-size' onClick={() => onSizeAdd(id, 'L')} aria-label='large size'> L </button>

    const defCartClick = (id) => {
        if (pricing.length > 1 && !priceMenu) {
            setShowPriceMenu(!priceMenu)
        }
        if (pricing && priceMenu) {
            setShowPriceMenu(!priceMenu)
        }
        if (pricing.length === 1) {
            showTost(true, name)
            addToCart(id)
        }
    }

    const onSizeAdd = (id, param) => {
        addToCart(id, param)
        showTost(true, name)
    }

    return (

        < Col className="product" sm={2} lg={2}>

            <div className="product-preview">
                <LazyLoad>
                    <img
                        alt={name}
                        src={img}
                    />
                </LazyLoad>
            </div>

            <div className="product-detail-container">

                <div className="product-icons">

                    <button className='product-icon-container' aria-label='info' onClick={() => setProductModal(menuItem)}>
                        <i className="fas fa-ellipsis-h" />
                    </button>

                    <button className={`product-icon-container ${addedItem}`} aria-label='order' onClick={() => defCartClick(id)}>
                        {basketBtn}
                        {closeSizesBtn}
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

const mapStateToProps = state => {
    return {
        menuType: state.menuType,
        cart: state.cart,
        productModal: state.productModal
    }
}

const mapDispatchToProps = {
    addToCart,
    showTost,
    setProductModal
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem)