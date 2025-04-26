import React, { createContext, useState } from "react";

const initialState = {
    text: 'Context API + Hooks',
    number: 1234,
}

export const AppContext = createContext(initialState)

const Store = props => {
  const [state, setState] = useState(initialState)

  function updateState(key, value) {
    setState(currentState => ({
      ...currentState,
      [key]: value
    }))
  }

  return (
      <AppContext.Provider value={{
        number: state.number,
        text: state.text,
        setNumber: n => updateState('number', n),
        setText: t => updateState('text', t),
        }}>
        <div>
            {props.children}
        </div>
      </AppContext.Provider>
  )
}

export default Store
