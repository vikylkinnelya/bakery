import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import './styles.css'

const ProductCard = ({ product, onAddToCart }) => {

    const { name, description, pricing, ingredients, id } = product

    return (

        <Col md={12} className="offer-box">
            <Row>
                <Col md={5} sm={12} className="offer-box-left offer-info">

                    <h1>{name}</h1>
                    <p>{description}</p>

                    <h2>Includes:</h2>
                    <ul className="list-numbers">
                        {ingredients != null && ingredients.length > 0
                            && ingredients.map((ingr, idx) => (
                                <li key={idx}>{ingr}</li>
                            ))}
                    </ul>
                    <Row className='price-order-row'>
                        <h2 className='text-huge'>
                            ${pricing}
                        </h2>
                        <button
                            aria-label='add to cart'
                            onClick={() => onAddToCart(id)}
                            className='button tabs-button'>
                            Order Now
                        </button>
                    </Row>
                </Col>
                <Col md={7} className="offer-box-right" >
                    <Image fluid src={`images/${id}-min.jpg`} />

                    <div className="product-label-container big-label">
                        <div className="product-label">
                            Week’s best seller
                        </div>
                        <div className="product-label-bottom"></div>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default ProductCard;