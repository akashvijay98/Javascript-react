import React, { Component } from "react";
import "./styles.css";
import Person from "./Person";

class App extends Component {
  state = {
    person: [{ name: "akash" }]
  };

  switchHandler = () => {
    this.setState({
      person: [{ name: "the great" }]
    });
  };
  render() {
    return (
      <div>
        <h3> hi babe </h3>

        <button onClick={this.switchHandler}>Click me</button>
        <Person name={this.state.person[0].name} />
      </div>
    );
  }
}

export default App;
