import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { Router, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore'

// custom view
import LoginView from './views/auth/loginView';
import Home from './views/home/home';
import CategoryPage from './views/category/category';
import CartPage from './views/cart/cart';
import UserPage from './views/user/user';
import PdtDetail from './views/pdtDetail/pdtDetail';

const customHistory = createBrowserHistory({
    hashType: "slash"
});

const store = configureStore();
console.log(store.getState());


const Root = () => (
    <Provider store={store}>
        <Router history={customHistory}>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={LoginView} />
                <Route path="/category" component={CategoryPage} />
                <Route path="/cart" component={CartPage} />
                <Route path="/user" component={UserPage} />
                <Route path="/detail/:id" component={PdtDetail} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#App'));