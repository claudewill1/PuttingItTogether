import React from "react";
import { Component } from "react";

export class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: props.age
        }
    }
    
    render(){
        //const {age} = this.props; 
        return (
            <div>
                <h1>
                    {this.props.lastName} {this.props.firstName}
                </h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={()=>this.setState({age: this.state.age + 1})}>Birth Button for {this.props.firstName} {this.props.lastName}</button>
            </div>
        )
    }
}