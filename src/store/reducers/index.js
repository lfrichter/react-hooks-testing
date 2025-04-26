import numberReducer from './numbers'
import { userReducer } from './user'

function allReducers(state, action) {
    let newState = numberReducer(state, action)
    return userReducer(newState, action)
}

export default allReducers
