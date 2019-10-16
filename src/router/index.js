import React from 'react';
import { Router, Route } from "react-router-dom"
import createBrowserHistory from 'history/createBrowserHistory'
import registerServiceWorker from '../registerServiceWorker'
import LoginView from '../containers/auth/loginView';
// import Home from '../containers/home/Home';
import Main from '../containers/main';
import CategoryPage from '../containers/category/category';
import CartPage from '../containers/cart/Cart';
import UserPage from '../containers/user/user';
import PdtDetail from '../containers/pdtDetail/PdtDetail';

import 'antd-mobile/dist/antd-mobile.css'

const customHistory = createBrowserHistory({
    hashType: "slash"
});

const RouteConfig = ()=>(
    <Router history={customHistory}>
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={LoginView} />
            <Route path="/category" component={CategoryPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/user" component={UserPage} />
            <Route path="/detail/:id" component={PdtDetail} />
        </div>
    </Router>
)

export default RouteConfig

registerServiceWorker();