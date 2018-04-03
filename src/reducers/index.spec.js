import { combineReducers } from 'redux'
import detailReducer from './detail.spec'
import userReducer from './user.spec'
import cartReducer from './cart.spce'
import productReducer from './product.spec'
import loginReducer from './login.spec'

const rootReducer = combineReducers({
    userReducer,
    detailReducer,
    cartReducer,
    productReducer,
    loginReducer
});

export default rootReducer