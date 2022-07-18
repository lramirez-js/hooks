import { useRef } from 'react'

// As we can notice we can access the DOM with CURRENT. JSX elements are reachable through useRef.
// The only thing we need to do is to associate useRef with a JSX property called "ref"
const App = () => {
  const inputRef = useRef()
  const setFocus = () => {
    inputRef.current.focus()
    console.log(inputRef.current.clientHeight)
  }
  const messageRef = useRef()
  const changeMessage = () => {
    messageRef.current.innerHTML = `You shouldn't change HTML with useRef. Use variables instead.`
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={setFocus}>Set Focus</button>
      <div ref={messageRef} onClick={changeMessage}>Don't click me</div>
    </div>
  )
}

export default App