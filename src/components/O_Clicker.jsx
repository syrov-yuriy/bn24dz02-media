import React, { useState } from "react";

import A_Text from "./A_Text.jsx";
import A_Button from "./A_Button.jsx";

export default function O_Clicker () {

    const [count, setCount] = useState(0);

    const handleMinus = () => {
        //Отминусовываться
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const handlePlus = () => {
        //Плюсовываться
        setCount(count + 1);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div className="O_Clicker">
            <A_Text text="Нажмите кнопку" type="A_Text" />
            <A_Text text={count} type="A_Text" />
            <A_Button text="-" type="A_Button" handleClick={handleMinus} />
            <A_Button text="+" type="A_Button" handleClick={handlePlus} />
            <A_Button text="Reset" type="A_Button" handleClick={handleReset}/>
        </div>
    )
}