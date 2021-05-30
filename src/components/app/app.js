import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Header from '../header';
import Footer from '../footer';
import { Shop, Cart } from '../pages/index';
import { Col, Container, Row } from 'react-bootstrap';

const App = () => {


    return (
        <>
            <Header />

            <>
                <Switch>

                    <Route path='/shop/'>
                        <Shop />
                    </Route>

                    <Route path='/cart/'>
                        <Cart />
                    </Route>

                </Switch>
            </>

            
            <Footer />


        </>
    )
}

export default App;