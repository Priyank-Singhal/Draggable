import React, { useState } from "react";
import './App.css'
import Drag from "./components/Drag";
import Draggable from 'react-draggable';

const Box = () => {
  return <div className="box"></div>;
};

const ParentBox = (props) => {
  // console.log("child", props.children)
  const [active, setActive] = useState(false);
  console.log("prop", props.count)
  const count = props.count + 1;
  const child = props.children;
  const handleMouseEnter = () => {
    setActive(true)
  }
  const handleMouseLeave = () => {
    setActive(false)
  }
  return (
    // <Draggable handle="#handle" bounds="parent">
    //   <div className="box">
    //     <button id="handle" className="button">Click</button>
    //     {children}
    //   </div>
    // </Draggable>
    // <div style={{ height: '600px', width: '600px', padding: '0' }}>
    <Draggable handle="#handle" bounds='parent' onStart={() => active}>
      <div style={{ width: `calc(400px + 100*${count}px)`, height: `calc(200px + 100*${count}px)`, padding: '10px', margin: '10px', marginTop: '45px', border: '2px solid greenyellow' }}>
        <button id="handle" className="button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Click {count}</button>
        {/* <div className="box" style={{ height: '500px', width: '500px', position: 'relative', overflow: 'auto', padding: '0' }}> */}
          {child}
        {/* </div> */}
      </div>
    </Draggable>
    // </div>
  )
}

function App() {
  const [parentCount, setParentCount] = useState(1);

  const handleAddParent = () => {
    setParentCount(parentCount + 1);
  }

  const renderParentBox = () => {
    // let boxes = <Drag />;
    let boxes;
    for (let i = 0; i < parentCount; i++) {
      boxes = <ParentBox count={i}>{boxes}</ParentBox>
      // boxes = <div className="" style={{ width: `calc(400px + 100*${i+2}px)`, height: `calc(200px + 100*${i+1}px)`, padding: '0', background: 'grey' }}>
      //   <ParentBox count = {i}>{boxes}</ParentBox>
      // </div>
    }
    return boxes;
  }

  return (
    <div className="App">
      <button id="parent-button" onClick={handleAddParent}>Add Parent</button>
      {renderParentBox()}
      {/* <Drag /> */}
      {/* <Draggable bounds="body" onStart={() => true}>
        <div className="box" style={{ height: '600px', width: '600px', padding: '0' }}>
          <div style={{ height: 'inherit', width: 'inherit', background: 'grey', padding: '10px' }}>
            <Draggable bounds="parent">
              <div className="box">
                I can only be moved within my offsetParent.<br /><br />
                Both parent padding and child margin work properly.
              </div>
            </Draggable>
          </div>
        </div>
      </Draggable> */}

    </div >
  );
}

export default App;