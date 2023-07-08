import React, { useState } from "react";
import './App.css'
import ParentBox from "./components/ParentBox";

function App() {
  const [parentCount, setParentCount] = useState(1);

  const handleAddParent = () => {
    setParentCount(parentCount + 1);
  }

  const renderParentBox = () => {
    let boxes;
    for (let i = 0; i < parentCount; i++) {
      boxes = <ParentBox count={i}>{boxes}</ParentBox>
    }
    return boxes;
  }

  return (
    <div className="App">
      <button id="add-button" onClick={handleAddParent}>Add Parent</button>
      {renderParentBox()}
    </div >
  );
}

export default App;