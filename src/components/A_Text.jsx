import React from "react";

export default function A_Text ({
    text,
    type
}) {

    return (
        <p className={type}>{text}</p>
    )
}