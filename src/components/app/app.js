import React, { Suspense } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../header';
import Footer from '../footer'
import ScrollToTop from '../scrollToTop';
import Spinner from '../spinner';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const About = React.lazy(() => import('../about-page'));
const Contact = React.lazy(() => import('../contact-page'));
const Home = React.lazy(() => import('../home-page'));
const Shop = React.lazy(() => import('../shop-page'));
const Cart = React.lazy(() => import('../cart-page'));

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
           

            <LazyLoadComponent>
                <Footer />
            </LazyLoadComponent>

        </Suspense>
    )
}

export default App;