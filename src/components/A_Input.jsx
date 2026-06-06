import React, { useRef } from "react";
import classNames from "classnames";

export default function A_Input ({
    value,
    type,
    placeholder,
    handleInput,
    handleSubmit
}) {
    const classes = classNames ({
        A_Input: true,
        [`${type}`]: true,
    })

    const input = useRef();

    const onInput = () => handleInput(input.current.value)

    return (
        <input 
            className={classes}
            ref={input}
            value={value}
            placeholder={placeholder}
            onInput={onInput}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
    )
}