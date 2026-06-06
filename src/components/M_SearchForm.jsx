import React from "react";

import A_Input from "./A_Input.jsx";
import A_Button from "./A_Button.jsx";

export default function M_SearchForm ({
    searchInputValue,
    isSearchDisabled,
    handleInput,
    handleSubmit
}) {

    return (
        <div className="M_Search">
            <A_Input 
                value={searchInputValue}
                placeholder='Поиск'
                type = ''
                handleInput={handleInput}
                handleSubmit={handleSubmit}
            />
            {searchInputValue != '' && (
                <A_Button
                    text=""
                    type="reset"
                    disabled= {false}
                    handleClick={() => handleInput('')}
                />
            )}
            <A_Button 
                text="Поиск"
                type="primary"
                disabled={isSearchDisabled}
                handleClick={handleSubmit}
            />
        </div>
    )
}