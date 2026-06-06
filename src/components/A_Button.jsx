import React from "react";
import classNames from "classnames";

export default function A_Button ({
    text,
    type,
    disabled,
    handleClick
}) {
    const classes = classNames ({
        A_Button: true,
        [`${type}`]: true,
        disabled: disabled
    })

    return (
        <button 
            className={classes} 
            onClick={handleClick}
        >{text}</button>
    )
}