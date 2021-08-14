import React, { useState } from 'react';
import { Col, Row, Image, Spinner } from 'react-bootstrap';

const ProductCard = ({ product, addToCart, showTost, setProductModal }) => {

    const { name, description, pricing, ingredients, id, img } = product

    const [btnLoading, setBtnLoading] = useState(false)

    const onAddToCartProcess = (id, name) => {
        setBtnLoading(true)
        setTimeout(() => {
            addToCart(id)
            showTost(true, name)
            setProductModal(false)
            setBtnLoading(false)
        }, 1500);
    }

    return (
        <Col md={12} className="offer-box">
            <Row>
                <Col lg={{ span: 5, order: 1 }} xs={{ span: 12, order: 2 }} className="offer-box-left offer-info">

                    <h1>{name}</h1>
                    <p>{description}</p>
                    <h2>Includes:</h2>
                    <ul className="list-numbers">
                        {ingredients != null && ingredients.length > 0
                            && ingredients.map((ingr, idx) => (
                                <li key={idx}>{ingr}</li>
                            ))}
                    </ul>
                </Col>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 7, order: 2 }} className="offer-box-right" >
                    <Image fluid src={img} alt={name} />

                    <div className="product-label-container big-label">
                        <div className="product-label">
                            Week’s best seller
                        </div>
                        <div className="product-label-bottom"></div>
                    </div>
                </Col>

                <Col className='price-order-row' sm={{ span: 12, order: 3 }}>
                    <Row>
                        <Col lg={2}>
                            <h2 className='text-huge'>
                                ${pricing}
                            </h2>
                        </Col>
                        <Col lg={4}>
                            {!btnLoading &&
                                <button
                                    aria-label='add to cart'
                                    onClick={() => { onAddToCartProcess(id, name) }}
                                    className='button tabs-button'>
                                    Order Now
                                </button>
                            }
                            {btnLoading &&
                                <button className='button tabs-button'>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    /> Loading...
                                </button>}
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Col>
    )
}

export default ProductCard;