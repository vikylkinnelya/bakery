import React, { useState} from 'react';
import LazyLoad from 'react-lazyload';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToCart, showTost } from '../../../actions';

const ShopItem = React.memo(({ menuItem, menuType, addToCart, cart, showTost }) => {

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

    const smallSize = priceMenu && pricing.length === 3
        && <button className='small-size' onClick={() => addToCart(id, 'S')} aria-label='small size'> S </button>
    const mediumSize = priceMenu &&
        <button className='medium-size' onClick={() => addToCart(id, 'M')} aria-label='medium size'> M </button>
    const bigSize = priceMenu &&
        <button className='big-size' onClick={() => addToCart(id, 'L')} aria-label='large size'> L </button>

    const defCartClick = (id) => {
        if (pricing.length > 1 && !priceMenu) {
            return setShowPriceMenu(!priceMenu)
        }
        if (pricing && priceMenu) {
            return setShowPriceMenu(!priceMenu)
        }
        if (pricing.length === 1) {
            showTost(true, name)
            return addToCart(id)
        }
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

                    <button className={`product-icon-container ${addedItem}`} aria-label='order' onClick={() => defCartClick(id)}>
                        {!priceMenu && <i className='fa fa-shopping-cart' />}
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
})



const mapStateToProps = state => {
    return {
        menuType: state.menuType,
        cart: state.cart,
    }
}

const mapDispatchToProps = {
    addToCart,
    showTost
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopItem)