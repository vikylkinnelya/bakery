import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import './styles.css'

const ProductCard = ({ product, onAddToCart }) => {

    const { name, description, pricing, ingredients, id } = product

    return (

        <Col md={12} className="offer-box">
            <Row>
                <Col lg={{span:5, order: 1}} xs={{span: 12, order:2}} className="offer-box-left offer-info">

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
                <Col xs={{span:12, order:1}} lg={{span:7, order:2}} className="offer-box-right" >
                    <Image fluid src={`images/${id}-img-min.jpg`} />

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