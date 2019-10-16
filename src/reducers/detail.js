import {RECEIVE_PDT_DETAIL} from '../constants/ActionTypes'

const initialState = {
    images: [],
    product: {},
    content: {}
}

const detail = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_PDT_DETAIL:
            return Object.assign({}, state, action.pdtContent)
        default:
            return state
    }
}

export default detail

export const getPdtDImages = state => state.images
export const getPdtDContent = state => (state.content&&state.content.html?state.content.html.replace(/img/g, 'img style="width:100%" '):'')
export const getPdtDProduct = state => state.product
