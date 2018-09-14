import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SampleApp } from './playground/es6-let-const.js';
import { ES6ArrowApp } from './playground/es6-arrow-function.js';
import { ES6ArrowApp2 } from './playground/es6-arrow-function2.js';

export default class App extends Component {
  render() {
    const app = {
      info: " save to reload!!!",
      title: "Induction App",
      subtitle: "subtitle-React sample trying",
      options: ["1", "2"]
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{app.title}</h1>
        </header>
        {app.subtitle && <p className="App-intro">{app.subtitle}</p>}
        {/* <div>{app.info}</div> */}
        <div>{(app.options && app.options.length > 0) ? "more are your options" : "No Options"}</div>
        <ol>
          <li>list onee</li>
          <li>list two</li>
        </ol>
        {/* template redering in single page */}
        <App2 test="super-test" />
        <App3 />
        {/* <SampleApp />
        <ES6ArrowApp /> */}
        {/* <ES6ArrowApp2 /> */}
      </div>
    );
  }
}
const user = {
  name: "lechu",
  age: "66",
  location: "tvm"
}
function getLocation(location) {
  if (location) {
    return <div className="test"><h4>Loc : {location}</h4></div>;
  }
}
export class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 'from state'
    }
    console.log(this.state.temp);
    console.log(props.test);
  }
  render() {
    //js logic
    return (
      //html view
      <div className="App2">
        <div>
          <div><b>this is second components</b></div>
          <div>
            {user.name ? <p>User: {user.name.toUpperCase() + "!"}</p> : "anoyms"}
            {(user.age && user.age >= 18) && <p>Age:{user.age}</p>}
            {/* {true} {false} {null} {undefined}  - is not an problem */}
            {/* <p>Location: {getLocation(user.location)}</p> {<h2>test</h2>} */}
            {getLocation(user.location)}
          </div>
        </div>
      </div>
    )
  }
}

export class App3 extends Component {
  constructor() {
    super();  // must constructor using
    this.state = {
      count: 0
    }
    console.log(this.state.count, "---");
  }
  render() {  
    let count = 0;
    const myid = "myid"
    const addOne = () => {
      count++;
      console.log("addone", count);
    }
    const minusOne = () => {
      count--;
      console.log("subtract", count);
    }
    const reset = () => {
      count = 0;
      console.log("reset", count);
    }
    return (
        <div>
          <h1>Count: {count}</h1>
          <button id={myid} className="button" onClick={addOne}>+1</button>
          <button onClick={minusOne}>-1</button>
          <button onClick={reset}>Reset</button>
        </div>

    );
  }
}



