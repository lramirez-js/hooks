import { useState } from 'react'

const MyComponent = ({ myProp }) => {
  return (
    <div>
      Name: {myProp}
    </div>
  )
}

const App = () => {
  // "counter" in this example is the vale. The number "0" is the initial value
  // "setCounter" is the setter and refreshes the DOM.
  // Hook rules:
  // 1. Cannot call hooks in loops. Preferably at the top level and never inside an if, for, while, etc.
  // 2. Only call hooks in two parts:
  //    a) React Components.
  //    b) Custom Hooks.
  // 3. When creating a Custom Hook, begin the name with "use" like in "useState".
  const [counter, setCounter] = useState(0)
  return (
    <>
      <MyComponent myProp={'Hello Wordl'}></MyComponent>
      <div>
        Counter: {counter}
        <button onClick={() => setCounter(counter + 1)}> Increment</button>
      </div>
    </>
  )
}


export default App