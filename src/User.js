import React from "react";

export class User extends React.Component{
    constructor(){
        super();
       console.log("Constructor")
       this.state={
           name:'Anil',
           age: 26
       }
    }
    componentDidMount(){
        console.log("cdm")
    }
    componentDidUpdate(){
     alert("Updated")
    }
    render(){
        return(
            <div>
                <h2>This is User Class Component</h2>
                <h2>Name is {this.state.name}</h2>
                <button onClick={()=>this.setState({name:'A K'})}>Update</button>
            </div>
        )
    }
}