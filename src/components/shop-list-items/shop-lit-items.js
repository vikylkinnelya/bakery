import React from 'react';
import ShopItem from '../shop-item'
import { Col, Container, Row, Pagination } from 'react-bootstrap'

const ShopListItems = () => {

    const items = {}

    return (
        <Container>
            <Row>
                <Col md="9">

                </Col>
                <Col md='3' class="sidebar">
                    <div class="margin-40"></div>
                    <form class="form-search onscroll-animate">
                        <input name="s" type="text" placeholder="Type and hit enter" />
                    </form>
                    <div class="article-header-4">
                        <h1>Categories</h1>
                    </div>
                    <ul class="list-arrows">
                        <li>
                            <a href="#">
                                <article>
                                    <div class="list-arrows-content">
                                        Breads
                                    </div>
                                    <div class="list-arrows-value">11</div>
                                </article>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <article>
                                    <div class="list-arrows-content">
                                        Croissants
                                    </div>
                                    <div class="list-arrows-value">15</div>
                                </article>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <article>
                                    <div class="list-arrows-content">
                                        Cakes
                                    </div>
                                    <div class="list-arrows-value">33</div>
                                </article>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <article>
                                    <div class="list-arrows-content">
                                        Flour Products
                                    </div>
                                    <div class="list-arrows-value">02</div>
                                </article>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <article>
                                    <div class="list-arrows-content">
                                        Diabetes
                                    </div>
                                    <div class="list-arrows-value">25</div>
                                </article>
                            </a>
                        </li>
                    </ul>
                    <div class="margin-60"></div>
                </Col>

                <PaginationComponent />

                
            </Row>
        </Container>
    )
}

export default ShopListItems;


const PaginationComponent = () => {
    const state = [{ a: 'a' }, { b: 'b' }, { c: 'c' }]
    let active = 1;
    let items = []

    for (let i = 1; i <= 7 && i <= state.length; i++) {
        items.push(
            <Pagination.Item
                className="pagination-item"
                key={i}
                active={i === active}
                activeLabel={null}>
                {i}
            </Pagination.Item>
        )
    }

    return (

        <Pagination className="pagination">
            <Pagination.Prev className="pagination-item pagination-nav" />
            {items}
            <Pagination.Next className="pagination-item pagination-nav" />
        </Pagination>

    );
}