import { useState, useEffect } from 'react'

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
  
  // useEffect will reload when the input (second parameter) is upated. In this case, the input is "counter".
  // So, everytime that "counter" changes, the function will be exectued again.
  // If the input is a blank array [] or ignored (no second parameter called), then useEffect will refresh when any update is done.
  useEffect(() => {
    console.log("Effect: Counter has changed")
  }, [counter]);

  return (
    <div>
      Counter: {counter}
      <button onClick={setCounter}> Increment</button>
    </div>
  )
}


export default App