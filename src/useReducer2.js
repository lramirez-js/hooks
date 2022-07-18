import { useReducer, useState } from 'react'

// const state = { counter: 0 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment': 
      return { counter: state.counter + 1 }
    case 'decrement':
      return { counter: state.counter - 1 }
    case 'set':
      return { counter: action.payload }
    default:
      return state
  }
}

const initial = { counter: 0 }

const App = () => {
  // The typical reducer looks like this:
  // const reducer = (acc, ele) => newAcc
  // For useReducer's functionality it will look like this:
  // const reducer = (state, action) => { return {any} }
  // Notie that the "return {any}" will return the new State value.
  //
  // An action has this structure:    'type' and 'payload' are conventions, do not change it.
  // const action = { type: String, payload: any }

  // This hook will return an array (similar to useState's). The "state" is the state too, but the function does not automatically
  // updates the state. It is a "dispatch" function that dispatches evens with the structure of actions (type and payload).
  const [state, dispatch] = useReducer(reducer, initial)
  const [customValue, setCustomValue] = useState(0)

  return (
    <>
      <div>
        Counter: {state.counter}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'set', payload: 5 })}>Set 5</button>
        <p>Custom value:</p>
        <input type='text' value={customValue} onChange={(element) => setCustomValue(element.target.value)} />
        <button onClick={() => dispatch({ type: 'set', payload: customValue })}>Set Custom Value</button>
      </div>
    </>
  )
}

export default App