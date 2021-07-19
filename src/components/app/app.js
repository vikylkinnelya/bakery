import React, { Suspense, lazy } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../header';
import ScrollToTop from '../scrollToTop';
import Spinner from '../spinner'; 
const About = lazy(() => import('../about-page'));
const Contact = lazy(() => import('../contact-page'));
const Home = lazy(() => import('../home-page'));
const Shop = lazy(() => import('../shop-page'));
const Cart = lazy(() => import('../cart-page'));
const Footer = lazy(() => import('../footer'))

const App = () => {

    return (
        <Suspense fallback={<Spinner />}>
            <ScrollToTop />
            <Header />

                <Switch>

                    <Route path='/about/'>
                        <About />
                    </Route>

                    <Route path='/contact/'>
                        <Contact />
                    </Route>

                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route path='/shop/'>
                        <Shop />
                    </Route>

                    <Route path='/cart/'>
                        <Cart />
                    </Route>

                </Switch>
           
                <Footer />

        </Suspense>
    )
}

export default App;