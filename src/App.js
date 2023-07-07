import React, { useState } from "react";
import './App.css'
import Drag from "./components/Drag";
import Draggable from 'react-draggable';

const Box = () => {
  return <div className="box"></div>;
};

const ParentBox = ({ children }) => {
  return (
    <div className="parent-box">
      {/* <Draggable bounds="parent"> */}
      {children}
      {/* </Draggable> */}
    </div>
  )
}

function App() {
  const [parentCount, setParentCount] = useState(0);

  const handleAddParent = () => {
    setParentCount(parentCount + 1);
  }

  const renderParentBox = () => {
    let boxes = <Drag />;

    for (let i = 0; i < parentCount; i++) {
      boxes = <ParentBox>{boxes}</ParentBox>
    }

    return boxes;
  }

  return (
    <div className="App">
      {/* <button id="parent-button" onClick={handleAddParent}>Add Parent</button> */}
      {/* <Drag cont = {content} /> */}
      {/* {renderParentBox()} */}
      <div className="box" style={{ height: '600px', width: '600px', position: 'relative', padding: '0' }}>
        {/* <div className="box" style={{position: 'relative', padding: '0'}}> */}
        <div style={{ height: 'inherit', width: 'inherit', background: 'grey', padding: '10px' }}>
          <Draggable bounds="parent">
            <div className="box">
              I can only be moved within my offsetParent.<br /><br />
              Both parent padding and child margin work properly.
            </div>
          </Draggable>
          <Draggable >
            <div className="box">
              I also can only be moved within my offsetParent.<br /><br />
              Both parent padding and child margin work properly.
            </div>
          </Draggable>
        </div>
      </div>
    </div >
  );
}

export default App;