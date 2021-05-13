import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Col} from 'react-bootstrap'

const ShopItem = ({ menuItem, menuType, onAddToCart }) => {

    const { name, description, price, pricing, type, id } = menuItem

    const productLabel = <div className="product-label-container-alt">
        <div className="product-label">
            {menuItem.label}
        </div>
        <div className="product-label-bottom"></div>
    </div>

    const [priceMenu, setShowPriceMenu] = useState(false)

    const smallCup = <button className='small-cup' onClick={() => onAddToCart(`${id}-m`)}> M </button>
    const bigCup = <button className='big-cup' onClick={() => onAddToCart(`${id}-l`)}> L </button>

    const defCartClick = (id) => {
        if (pricing && !priceMenu) {
            return setShowPriceMenu(!priceMenu)
        }
        if (pricing && priceMenu) {
            return setShowPriceMenu(!priceMenu)
        }
        if (!pricing) {
            return  onAddToCart(id)
        }
    }

    return (

        < Col className="product" >
            <div className="product-preview">
                <LazyLoadImage alt={name} src={`../../images/shop/${id}-min.jpg`} />
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
                    { priceMenu && pricing && smallCup}
                    { priceMenu && pricing && bigCup}

                </div>
                <div className="product-detail">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    {menuType === 'all' && <h3>{type}</h3>}
                    {price && <p className="product-price">${price}</p>}
                    {pricing && <p className="product-price">$ {pricing.join(' - ')} </p>}

                </div>
            </div>

            { menuItem.label && productLabel}

        </ Col>

    )
}

export default ShopItem

/* const CartBtn = () => {

    const [priceMenu, setShowPriceMenu] = useState(false)

    const smallCup = <button className='small-cup'> M </button>
    const bigCup = <button className='big-cup'> L </button>


    return (
        <>
            <button className="product-icon-container" onClick={() => setShowPriceMenu(!priceMenu)}>
                {!priceMenu && <i className="fa fa-shopping-cart" />}
                {priceMenu && <i className="fas fa-times"></i>}
            </button>
            {this.pricing && smallCup}
            {this.pricing && bigCup}

        </>
    )


} */