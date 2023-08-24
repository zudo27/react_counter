//Example of Class Components
import React, { Component } from "react";

export class Welcome extends Component {
    //use of props in Class Components
    render(){
        return <h1>Welcome {this.props.name}</h1>
    }
}


