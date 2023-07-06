import React from 'react'
import Draggable from 'react-draggable';

const Drag = () => {
    return (
        <div>
            <Draggable handle="#handle">
                <div className="box">
                    <button id="handle" className="button">Click</button>
                    {/* <span id="handle">Drag here</span> */}
                    {/* <div style={{ padding: "1em" }}>Cannot drag here</div> */}
                </div>
            </Draggable>
        </div>
    )
}

export default Drag