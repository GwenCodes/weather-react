import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World! This is my first React app.</h1>
        <Weather />
      </header>
    </div>
  );
}
