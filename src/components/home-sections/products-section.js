import React, { useState, useEffect, useCallback } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import ShopItem from '../shop-page/shop-item';
import { ToastComp } from '../small-comp';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart, showTost, setLatestProducts } from '../../actions';

const ProductsSection = ({ latestProducts, loading, cart, menuType, setLatestProducts, addToCart, tostIsShown, showTost, tostTitle }) => {

    const [startAt, setStart] = useState(0)
    const [endAt, setEnd] = useState(4)

    const onChangeSliderPage = (activeIdx) => {
        const idxPairs = [[0, 4], [4, 8], [8, 12]]
        setStart(idxPairs[activeIdx][0])
        setEnd(idxPairs[activeIdx][1])
    }

    const CarouselItem =
        <Row className='product-row'>
            {latestProducts.slice(startAt, endAt).map(menuItem => (
                    <ShopItem
                        key={menuItem.id}
                        menuItem={menuItem}
                        menuType={menuType}
                        showTost={showTost}
                        onAddToCart={addToCart}
                        cart={cart}
                    />
                ))}
        </Row>

    return (

        <section id="products-section">
            <div className="section-content">
                <header className="section-header" >
                    <h1>Our latest bakery products</h1>
                    <p>Check some of our best products and feel the great passion for food</p>
                </header>
                <Carousel fade
                    className='shop-slide'
                    slide={false}
                    controls={false}
                    onSelect={activeIndex => {
                        onChangeSliderPage(activeIndex)
                    }}
                >
                    <Carousel.Item>
                        {CarouselItem}
                    </Carousel.Item>
                    <Carousel.Item>
                        {CarouselItem}
                    </Carousel.Item>
                    <Carousel.Item>
                        {CarouselItem}
                    </Carousel.Item>
                </Carousel>

                <div className="text-center">
                    <Link className="button-void" aria-label='see all products' to='/shop/all'>See all our products</Link>
                </div>
            </div>

            <ToastComp
                tostTitle={tostTitle}
                tostIsShown={tostIsShown}
                showTost={showTost}
            />

        </section>
    )
}


const mapStateToProps = state => {
    return {
        loading: state.loading,
        menuType: state.menuType,
        cart: state.cart,
        latestProducts: state.latestProducts,
        tostIsShown: state.tostIsShown,
        tostTitle: state.tostTitle
    }
}

const mapDispatchToProps = {
    addToCart, showTost, setLatestProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSection)