import React, { Component } from "react";
import "./styles.css";
import Person from "./Component/Person";

class App extends Component {
  state = {
    person: [
      { name: "akash" },
    {name:"hero"},
    {name:"boss"}
  ]
  };

  switchHandler = (newname) => {
    this.setState({
      person: [{ name: newname },
    {name:"akshy"},
    {name:"kumar"}
  ]
    })
  }

  changeHandler = (event) =>{
    this.setState({
      person: [{ name:event.target.value},
    {name:"akshy"},
    {name:"kumar"}
  ]
    })
    



  }
  render() {
    return (
      <div>
        <h3> hello </h3>

        <button onClick={()=> this.switchHandler("yamma")}>Click me</button>
        <Person name={this.state.person[0].name} 
          click={()=>this.switchHandler("jimbalakadi")}
          change = {this.changeHandler}> hobbies:I love computers </Person>
        <Person name={this.state.person[1].name} />
        <Person name={this.state.person[2].name} />
      </div>
    );
  }
}

export default App;
