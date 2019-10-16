import React from 'react';
import ReactDOM from 'react-dom';

import MainTabBar from './containers/main.js';
// import NotFoundPage from './nofind/nofind.jsx';
import Login from './views/auth/loginView.js';
import registerServiceWorker from './registerServiceWorker';

import { Router, Route,  Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

const history = createHistory();



// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={history} >
        <MainTabBar/>

        <Route path="/Login" component={Login} />
        <Route path="/" component={MainTabBar} >
            {/*<IndexRoute component={Welcome}/>*/}
            <Route path="Login" component={Login} />
            {/* 404 */}
            {/*<Route path='/404' component={NotFoundPage} />*/}
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='/404' />
        </Route>
    </Router>
    , document.querySelector('#App')
);

registerServiceWorker();


