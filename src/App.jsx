import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import React from "react";
import Another from "./Another";

function App() {
  const someStyle = {
    background: "grey",
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    fontWeight: "as",
  };
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Another name="John" />
        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label htmlFor=""></label>
        {/* <p style={{background:'blue'}}>{ true && 2+3}</p> */}
        <p style={someStyle}>{true && 2 + 3}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
