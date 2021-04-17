import React from 'react';
function Blank(props) {
    let pos = props.position;
    pos = pos.concat(" blank")
    return (
        <div onClick={props.clickHandler} className={pos}>
            <div className="box">
            </div>
        </div>
    )
}
export default Blank;