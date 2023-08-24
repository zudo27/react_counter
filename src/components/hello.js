//Example of Class Components
import React , { Component } from "react";

export class Hello extends Component {
    //use of state in class Components
    constructor(){
        super()
        this.state = {
            message: "Welcome Visitor"
        }
    }
    changeMessage() {
        this.setState({
            message: 'thank you for subscribing'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}