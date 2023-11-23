import { Component } from 'react'

class ClassComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter: 0
    }
  }

  incrementCounter = () => {
    this.setState({counter: this.state.counter + 1})  
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    )
  }
}

export default ClassComp;
