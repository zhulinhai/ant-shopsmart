import * as types from '../constants/ActionTypes'

function requestProducts() {
    return {
        type: types.REQUEST_PRODUCTS
    }
}

function receiveProducts(json) {
    return {
        type: types.RECEIVE_PRODUCTS,
        pdtList: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}


export function fetchProducts() {
    return dispatch => {
        dispatch(requestProducts())
        return fetch(`http://localhost:8000/api/getProductList`)
            .then(response => response.json())
            .then(json => dispatch(receiveProducts( json)))
    }
}

export function shouldFetchProducts(state) {
    console.log(state);
    // const posts = state.postsBySubreddit[subreddit]
    // if (!posts) {
        return true
    // } else if (posts.isFetching) {
    //     return false
    // } else {
    //     return posts.didInvalidate
    // }
}

export function fetchProductsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchProducts(getState() )) {
            return dispatch(fetchProducts())
        }
    }
}