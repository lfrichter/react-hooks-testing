export function numberAdd2(dispatch) {
    dispatch({type: 'numberAdd2'})
}

export function numberMult7(dispatch) {
    dispatch({type: 'numberMult7'})
}

export function numberDiv25(dispatch) {
    dispatch({type: 'numberDiv25'})
}

export function numberInt(dispatch) {
    dispatch({type: 'numberInt'})
}

export function numberAddN(dispatch, number) {
    dispatch({type: 'numberAddN', payload: {number}})
}
