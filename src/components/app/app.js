import { Switch, Route, Redirect } from "react-router-dom";
import Header from '../header';
import Footer from '../footer';
import ScrollToTop from '../scrollToTop';
import { Shop, Cart, About, Contact, Home } from '../pages/index';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const App = () => {

    return (
        <>
            <ScrollToTop />
            <Header />

            <>
                <Switch>

                    <Redirect exact from="/" to="/bakery/home" />
                    
                    <Route path='/bakery/about/'>
                        <About />
                    </Route>

                    <Route path='/bakery/contact/'>
                        <Contact />
                    </Route>

                    <Route path='/bakery/home/'>
                        <Home />
                    </Route>

                    <Route path='/bakery/shop/'>
                        <Shop />
                    </Route>

                    <Route path='/bakery/cart/'>
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