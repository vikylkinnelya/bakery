import React, { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import ShopItem from '../shop-item';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import './products.css'

const ProductsSection = ({ latestProducts, loading, cart, menuType, addToCart }) => {

    const [startAt, setStart] = useState(0)
    const [endAt, setEnd] = useState(4)

    const onChangeSliderPage = (activeIdx) => {
        const idxPairs = [[0, 4], [4, 8], [8, 12]]
        setStart(idxPairs[activeIdx][0])
        setEnd(idxPairs[activeIdx][1])
    }

    const CarouselItem =
        <Row className='product-row'>
            {!loading && latestProducts != null && latestProducts.length > 0
                && latestProducts.slice(startAt, endAt).map(menuItem => (
                    <ShopItem
                        key={menuItem.id}
                        menuItem={menuItem}
                        menuType={menuType}
                        onAddToCart={addToCart}
                        cart={cart}
                    />
                ))}
        </Row>

    return (

        <section id="products-section">
            <div className="section-content">
                <header className="section-header">
                    <h1>Our latest bakery products</h1>
                    <p>Check some of our best products and feel the great passion for food</p>
                </header>
                <Carousel fade
                    className='shop-slide'
                    controls={false}
                    interval={7500}
                    onSelect={activeIndex => {
                        onChangeSliderPage(activeIndex)
                        //scrollToComponent(this.ShopCarousel, { offset: -40, align: 'top', duration: 500 })
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

                <div className="text-center onscroll-animate">
                    <Link className="button-void" to='/shop/all'>See all our products</Link>
                </div>
                <div className="margin-60"></div>
            </div>
        </section>
    )
}


const mapStateToProps = state => {
    return {
        loading: state.loading,
        menuType: state.menuType,
        cart: state.cart,
        latestProducts: state.latestProducts,
    }
}

const mapDispatchToProps = {
    addToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsSection)