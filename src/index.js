import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import RouteConfig from './router/index'
import {getAllProducts, getAds, getPdtDetail} from "./actions/product"

const store = configureStore();

store.dispatch(getAllProducts())
store.dispatch(getAds())
store.dispatch(getPdtDetail(1))

const Root = () => (
    <Provider store={store}>
        <RouteConfig />
    </Provider>
);

ReactDOM.render(<Root />, document.querySelector('#App'));