import React from 'react'
import Draggable from 'react-draggable';

const Drag = ( props ) => {
    return (
        <div>
            <Draggable handle="#handle" bounds="parent">
            {/* <Draggable handle="#handle"> */}
                <div className="box">
                    <button id="handle" className="button">Click</button>
                    {/* <span id="handle">Drag here</span> */}
                    {/* <div style={{ padding: "1em" }}>{props.cont}</div> */}
                </div>
            </Draggable>
        </div>
    )
}

export default Drag