import { combineReducers } from 'redux'
import { RECEIVE_ADS } from '../constants/ActionTypes'

const ads = (state, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const byAdId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_ADS:
            return {
                ...state,
                ...action.ads.reduce((obj, ad) => {
                    obj[ad.id] = ad
                    return obj
                }, {})
            }
        default:
            const { adId } = action
            if (adId) {
                return {
                    ...state,
                    [adId]: ads(state[adId], action)
                }
            }
            return state
    }
}

const visibleAdIds = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ADS:
            return action.ads.map(ad => ad.id)
        default:
            return state
    }
}

export default combineReducers({
    byAdId,
    visibleAdIds
})

export const getAd = (state, id) =>
    state.byAdId[id]

export const getVisibleAds = state =>
    state.visibleAdIds.map(id => getAd(state, id))
