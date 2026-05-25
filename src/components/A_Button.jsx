import React from "react";

export default function A_Button ({
    text,
    type,
    handleClick
}) {

    return (
        <button 
            className={type} 
            onClick={handleClick}
        >{text}</button>
    )
}