import React from 'react';
import { Switch, Route, } from "react-router-dom";
import Header from '../header'
import { Shop, Cart } from '../pages/index'
import { Container} from 'react-bootstrap'

const App = () => {


    return (
        <>
            <Header />

                <Switch>

                    <Route path='/shop/'>
                        <Shop/>
                    </Route>

                    <Route path='/cart/'>
                        <Cart/>
                    </Route>

                </Switch>
            

        </>
    )
}

export default App;