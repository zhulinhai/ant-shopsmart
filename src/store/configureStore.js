import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import root  from '../reducers/index'

import registerServiceWorker from '../registerServiceWorker';


const middleware = [ thunkMiddleware ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

export default function configureStore(preloadedState){
    return createStore(
        root,
        preloadedState,
        applyMiddleware(...middleware)
    );
}

registerServiceWorker();
