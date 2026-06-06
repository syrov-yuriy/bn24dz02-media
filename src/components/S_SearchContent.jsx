import React, { useState, useEffect } from "react";
import { getPostTeasers } from "../javascripts/search-data.js"
import M_SearchForm from "./M_SearchForm.jsx";

export default function S_SearchContent ({
    searchInputValue: initialInput
}) {
console.log(initialInput);
    const [isSearchDisabled, setIsSearchDisabled] = useState(true);
    const [searchInputValue, setSearchInputValue] = useState(initialInput || '');
    const [postTeasers, setPostTeasers] = useState([]);

    useEffect(() => {
        getPostTeasers().then(setPostTeasers)
    },[])

    useEffect(() => {
        setIsSearchDisabled(searchInputValue <= 3)
    },[searchInputValue])

    const handleInput = (value) => {setSearchInputValue(value)}
    const handleSubmit = () => {}

    function renderPostTeasers () {
        
    }

    return (
        <>
            <M_SearchForm 
                searchInputValue={searchInputValue}
                isSearchDisabled={isSearchDisabled}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
            />
            <div className="S_Content">{renderPostTeasers()}</div>
        </>
    )
}