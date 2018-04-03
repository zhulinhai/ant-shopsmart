import {
    INVALIDATE_SUBREDDIT,
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS
} from '../constants/ActionTypes'

function posts(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_PRODUCTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_PRODUCTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            });
        default:
            return state
    }
}

const productReducer = (state = {}, action)=> {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_PRODUCTS:
        case REQUEST_PRODUCTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            });
        default:
            return state
    }
};

export default productReducer

