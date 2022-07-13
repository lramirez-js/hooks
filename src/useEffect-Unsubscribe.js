import { useState, useEffect } from 'react'

// This is a Custom Hook:
const useCounter = (initialValue) => {
  const [counterVal, setCounterVal] = useState(initialValue)
  
  const increment = () => {
    setCounterVal(counterVal + 1)
  }

  return [ counterVal, increment ]
}

const Interval = ({ counter }) => {
  useEffect(() => {
    const inter = setInterval(() => console.log(counter), 1000)
    // NOTE: this return on useEffect will help us to UNSUBSCRIBE from previously called effects.
    // If we called the Interval when counter == 1, and then we call it again when counter == 2, we would have both intervals running.
    // This prevents that behavior:
    return () => clearInterval(inter)
  }, [counter])

  return (
    <p>Interval on</p>
  )
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
      <Interval counter={counter} />
    </div>
  )
}


export default App