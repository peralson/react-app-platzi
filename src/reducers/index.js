const reducer = (state, action) => {

    switch (action.type) {
        case 'REGISTER_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                user: action.payload
            }
        case 'SET_FAVORITE':
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case 'DELETE_FAVORITE':
            return {
                ...state,
                myList: state.myList.filter(item => item.id !== action.payload)
            }
        case 'SEARCH_REQUEST':
            return {
                ...state,
                searchQuery: (action.payload === '') ? [] : state.trends.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())) || state.originals.filter(item => item.title.toLowerCase().includes(action.payload.toLowerCase())) || []
            }
        case 'GET_VIDEO_SOURCE':
            return {
                ...state,
                playing: state.trends.find(item => item.id === Number(action.payload)) || state.originals.find(item => item.id === Number(action.payload)) || []
            }
        default:
            return state
    }

}

export default reducer