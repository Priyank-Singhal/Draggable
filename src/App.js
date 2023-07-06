import React from "react";
import './App.css'
import Drag from "./components/Drag";


function App() {

  const handleClick = () => {
    
  }

  return (
    <div className="App">
      <button id="parent-button" onClick={handleClick}>Add Parent</button>
      <Drag />
    </div>
  );
}

export default App;