import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, allReducers } from '../../store'
import { numberAdd2, numberMult7, numberDiv25, numberInt, numberAddN, login } from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(allReducers, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ?
                    <span className="text">{state.user.name}</span>
                    : <span className="text">Without user</span>
                }
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn"
                        onClick={() => login(dispatch, 'Leonel')}>Login</button>
                    <button className="btn"
                        onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn"
                        onClick={() => numberMult7(dispatch)}>x7</button>
                    <button className="btn"
                        onClick={() => numberDiv25(dispatch)}>/25</button>
                    <button className="btn"
                        onClick={() => numberInt(dispatch)}>Int</button>
                    <button className="btn"
                        onClick={() => numberAddN(dispatch, 1)}>+1</button>
                    <button className="btn"
                        onClick={() => numberAddN(dispatch, 4)}>+4</button>
                    <button className="btn"
                        onClick={() => numberAddN(dispatch, -9)}>-9</button>

                </div>
            </div>
        </div>
    )
}

export default UseReducer
