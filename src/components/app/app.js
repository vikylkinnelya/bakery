import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Header from '../header';
import Footer from '../footer';
import { Shop, Cart, About, Contact, Home } from '../pages/index';
import { Col, Container, Row } from 'react-bootstrap';
import { LazyLoadComponent } from 'react-lazy-load-image-component';


const App = () => {


    return (
        <>
            <Header />

            <>
                <Switch>
                    <Route path='/about/'>
                        <About />
                    </Route>

                    <Route path='/contact/'>
                        <Contact />
                    </Route>

                    <Route path='/home/'>
                        <Home />
                    </Route>

                    <Route path='/shop/'>
                        <Shop />
                    </Route>

                    <Route path='/cart/'>
                        <Cart />
                    </Route>

                </Switch>
            </>

            <LazyLoadComponent>
                <Footer />
            </LazyLoadComponent>

        </>
    )
}

export default App;