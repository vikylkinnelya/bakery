import React from 'react';
import { Col, Row, Tab, Image } from 'react-bootstrap';




const ItemCard = (item, onAddToCart, key) => {

    const { name, description, pricing, ingredients, label } = item

    return (

        <Tab.Pane eventKey={item.key}>
            <Col md={12} className="offer-box">
                <Row>
                    <Col md={5} sm={12} className="offer-box-left">
                        <div className="offer-info">
                            <h1>{item.name}</h1>
                            <p>{item.description}</p>
                            <h2>Ingredients:</h2>
                            <ul className="list-numbers">
                                {item.ingredients != null && item.ingredients.length > 0
                                    && item.ingredients.map(ingr => (
                                        <li>{ingr}</li>
                                    ))}

                            </ul>
                            <div className="margin-20"></div>
                            <button className='button tabs-button'>Order Now</button>

                            <div className="margin-20"></div>
                        </div>
                    </Col>
                    <Col md={7} className="offer-box-right" >
                        <Image fluid src='images/offer1.png' />

                        <div className="product-label-container big-label">
                            <div className="product-label">
                                Week’s best seller
                            </div>
                            <div className="product-label-bottom"></div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Tab.Pane>
    )
}

export default ItemCard;