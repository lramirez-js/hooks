import React, { Component } from 'react'

class App extends Component {
  state = {
    counter: 0
  }

  increment = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        Counter: {counter}
        <button onClick={() => this.increment()}> Increment</button>
      </div>
    )
  }
}

export default App