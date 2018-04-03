import {
    USER_LOGGED_IN,
    USER_LOGGING_IN,
    USER_LOGGED_OUT
} from '../constants/ActionTypes'

const loginReducer = (state = [], action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return [
                ...state,
                {
                    id: action.pid,
                    text: action.text,
                    completed: false
                }
            ];
        case USER_LOGGING_IN:
            return [
                ...state,
                {
                    id: action.pid,
                    text: action.text,
                    completed: false
                }
            ];
        case USER_LOGGED_OUT:
            return [
                ...state,
                {
                    id: action.pid,
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state
    }
}

export default loginReducer