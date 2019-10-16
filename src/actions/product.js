import {
    REQUEST_PRODUCTS, RECEIVE_PRODUCTS, ADD_TO_CART, CHECKOUT_REQUEST, CHECKOUT_SUCCESS,
    REQUEST_ADS, RECEIVE_ADS, REQUEST_PDT_DETAIL,RECEIVE_PDT_DETAIL
} from '../constants/ActionTypes'

const requestProducts = ()=> {
    return {
        type: REQUEST_PRODUCTS
    }
}

const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
})

const requestAds = ()=> {
    return { type: REQUEST_ADS }
}

const receiveAds = ads => ({
    type: RECEIVE_ADS,
    ads
})

const requestPdtDetail = ()=>{
    return { type: REQUEST_PDT_DETAIL}
}

const receivePdtDetail = (pdtContent)=> ({
    type: RECEIVE_PDT_DETAIL,
    pdtContent
})

export const getPdtDetail = (id) => dispatch => {
    dispatch(requestPdtDetail())
    return  fetch(`/api/getPdtContent/` + id)
        .then(response => response.json())
        .then(json => {
            dispatch(receivePdtDetail( json ))
        })
        .catch(err => { console.log(err) })
}

export const getAllProducts = () => dispatch => {
    dispatch(requestProducts())
    return fetch(`/api/getProductList/`)
        .then(response => response.json())
        .then(json => dispatch(receiveProducts( json.products.data )))
        .catch(err => { console.log(err) })

}

export const getAds = () => dispatch => {
    dispatch(requestAds())
    return fetch(`/api/getADList/0`)
        .then(response => response.json())
        .then(json =>{ dispatch(receiveAds( json.ads )) })
        .catch(err => { console.log(err) })
}

const addToCartUnsafe = productId => ({
    type: ADD_TO_CART,
    productId
})

export const addToCart = productId => (dispatch, getState) => {
    dispatch(addToCartUnsafe(productId))
}

export const checkout = products => (dispatch, getState) => {
    const { cart } = getState()

    dispatch({
        type: CHECKOUT_REQUEST
    })
    // shop.buyProducts(products, () => {
        dispatch({
            type: CHECKOUT_SUCCESS,
            cart
        })
        // Replace the line above with line below to rollback on failure:
        // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    // })
}