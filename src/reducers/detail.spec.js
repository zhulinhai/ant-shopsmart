const detailReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_DETAIL':
            return [
                ...state,
                {
                    id: action.pid,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default detailReducer