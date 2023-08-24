import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increase () {
        this.setState((previousState)=> ({
            count: previousState.count + 1,
        }))
    }
    increaseFive() {
        this.increase();
        this.increase();
        this.increase();
        this.increase();
        this.increase();

    }
    decrease () {
        this.setState((previousState)=> ({
            count: previousState.count + 1,
        }))
    }
    reset () {
        this.setState(()=> ({
            count: 0,
        }))
    }
  render() {
    return (
        <div>
            <div>Counter - {this.state.count}</div>
            <button onClick={()=> this.increase()}>Increase</button>
            <button onClick={()=> this.decrease()}>Decrease</button>
            <button onClick={()=> this.reset()}>Reset</button>
            <button onClick={()=> this.increaseFive()}>Increase By five</button>
        </div>
    )
  }
}