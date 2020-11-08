import React from 'react'
import {BrowserRouter, Switch ,Route , Redirect} from 'react-router-dom'
import Navbar from 'core/components/Navbar'
import Home from 'pages/Home';
import Search from 'pages/Search';

const Routes = () => (
    <BrowserRouter>
    <Navbar/>
        <Switch>
            <Redirect from="/home" to ="/"/>
            <Route path="/" exact>
                <Home/>
            </Route>

            <Route path="/search" exact>
                <Search/>
            </Route>




        </Switch>
    </BrowserRouter>



)
export default Routes;

