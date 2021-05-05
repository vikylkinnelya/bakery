import React from 'react'

const ShopItem = () => {

    const item = {}

    const productLabel = <div className="product-label-container-alt">
        <div className="product-label">
            {item.label}
        </div>
        <div className="product-label-bottom"></div>
    </div>

    return (

        <div className="product">
            {item.label && productLabel}

            <div className="product-preview">
                <img alt={item.title} src={item.url} />
            </div>

            <div className="product-detail-container">

                <div className="product-icons">
                    <div className="product-icon-container">
                        <a href="#"><i className="fa fa-shopping-cart"></i></a>
                    </div>
                    <div className="product-icon-container">
                        <a href="#"><i className="fa fa-heart"></i></a>
                    </div>
                </div>
                <div className="product-detail">
                    <p className="product-price">{item.price}</p>
                </div>
            </div>

        </div>

    )
}

export default ShopItem