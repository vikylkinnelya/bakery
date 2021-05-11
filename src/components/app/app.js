import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Header from '../header'
import ShopListItems from '../shop-list'
import { Shop } from '../pages/index'

const App = () => {


    return (
        <>
            <Header />

                <Switch>

                    <Route path='/shop'>
                        <Shop className="container" />
                    </Route>

                </Switch>
            

        </>
    )
}

export default App;