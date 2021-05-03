import React from 'react'

const ShopItem = () => {

    const item = {}

    const productLabel = <div class="product-label-container-alt">
        <div class="product-label">
            {item.label}
        </div>
        <div class="product-label-bottom"></div>
    </div>



    return (

        <div class="product">
            {item.label && productLabel}

            <div class="product-preview">
                <img alt={item.title} src={item.url} />
            </div>

            <div class="product-detail-container">

                <div class="product-icons">
                    <div class="product-icon-container">
                        <a href="#"><i class="fa fa-shopping-cart"></i></a>
                    </div>
                    <div class="product-icon-container">
                        <a href="#"><i class="fa fa-heart"></i></a>
                    </div>
                </div>
                <div class="product-detail">
                    <p class="product-price">{item.price}</p>
                </div>
            </div>

        </div>

    )
}

export default ShopItem