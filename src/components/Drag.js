import React from 'react'
import Draggable from 'react-draggable';

const Drag = () => {
    return (
        <Draggable handle="#handle" bounds='parent'>
            {/* <div className="box" style={{width: '25rem', height: '12rem'}}> */}
            <div className="box" >
                <button id="handle" className="button">Click</button>
                {/* <div style={{ padding: "1em" }}>{props.cont}</div> */}
            </div>
        </Draggable>
    )
}

export default Drag