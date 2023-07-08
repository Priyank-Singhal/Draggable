import React, { useState } from 'react'
import Draggable from 'react-draggable';

const ParentBox = (props) => {
    const [active, setActive] = useState(false);

    const count = props.count;
    const child = props.children;

    const handleMouseEnter = () => {
        setActive(true);
    }

    const handleMouseLeave = () => {
        setActive(false);
    }

    return (
        <Draggable handle="#handle" bounds='parent' onStart={() => active}>
            <div className='parent-box' style={{ width: `calc(300px + 200*${count}px)`, height: `calc(100px + 200*${count}px)` }}>
                <button id="handle" className="button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Click {count + 1}</button>
                {child}
            </div>
        </Draggable>
    );
}

export default ParentBox;