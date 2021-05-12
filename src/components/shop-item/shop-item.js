import React, { useState } from 'react';
import { Col, Container, Row, Pagination } from 'react-bootstrap'

const ShopItem = ({ menuItem, menuType }) => {

    const { name, description, price, pricing, type } = menuItem

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
                        <i className="fa fa-heart"></i>
                    </button>
                    <CartBtn />

                </div>
                <div className="product-detail">
                    <h2>{name}</h2>
                    {menuType === 'all' && <p>{type}</p>}
                    {price && <p className="product-price">${price}</p>}
                    {pricing && <p className="product-price">$ {pricing.join(' - ')} </p>}

                </div>
            </div>

            { menuItem.label && productLabel}

        </ Col>

    )
}

export default ShopItem

const CartBtn = () => {

    const [priceMenu, setShowPriceMenu] = useState(false)

    const smallCup = <button className='small-cup'> M </button>
    const bigCup = <button className='big-cup'> L </button>


    return (
        <>
            <button className="product-icon-container" onClick={() => setShowPriceMenu(!priceMenu)}>
                {!priceMenu && <i className="fa fa-shopping-cart" />}
                {priceMenu && <i className="fas fa-times"></i>}
            </button>
            {priceMenu && smallCup}
            {priceMenu && bigCup}

        </>
    )


}