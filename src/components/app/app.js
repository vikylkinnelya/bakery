import React from 'react';
import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from '../header'
import { Shop } from '../pages/index'

const App = () => {


    return (
        <>
            <Header />
            
            <Switch>

                <Route exact path='/'>
                    <Shop />
                </Route>

            </Switch>
        </>
    )
}

export default App;