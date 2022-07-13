import { useState } from 'react'

// This is a Custom Hook:
const useCounter = (initialValue) => {
  const [counterVal, setCounterVal] = useState(initialValue)
  
  const increment = () => {
    setCounterVal(counterVal + 1)
  }

  return [ counterVal, increment ]
}


const App = () => {
  const[counter, setCounter] = useCounter(5)

  return (
    <div>
      Counter: {counter}
      <button onClick={setCounter}> Increment</button>
    </div>
  )
}


export default App