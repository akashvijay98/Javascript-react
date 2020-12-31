import React from "react";

const person = (props) => {
  return (<div><p onClick={props.click}> My name {props.name} </p>
  <input type="text" onChange={props.change}/>;
  </div>)
};

export default person;
