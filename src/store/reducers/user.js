// Generic function to handle the state
const userReducer = (state, action) => {
    switch(action.type) {
        case 'login':
            return {...state, user: {name: action.payload.name}}
        default:
            return state
    }
}

export { userReducer }
