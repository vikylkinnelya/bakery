import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Header from '../header'
import ShopListItems from '../shop-list-items'
import { Shop } from '../pages/index'

const App = () => {


    return (
        <>
            <Header />
            
            <Switch>

                <Route exact path='/'>
                    <ShopListItems />
                </Route>

            </Switch>
        </>
    )
}

export default App;