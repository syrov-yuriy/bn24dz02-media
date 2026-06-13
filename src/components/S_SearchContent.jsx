import React, { useState, useEffect } from "react";
import { getPostTeasers } from "../javascripts/search-data.js"
import M_SearchForm from "./M_SearchForm.jsx";
import M_PostTeaser from "./M_PostTeasers.jsx";

export default function S_SearchContent ({
    searchInputValue: initialInput
}) {
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
        const nbspRegEx = /[\u202F\u00A0]/gm;
        const punctuationRegEx = /[.,\/#!$%\^&\*;:{}=_`()]/gm;
        const searchInputLower = searchInputValue.toLowerCase();

        const clean = (str) => {
            return str.replaceAll(nbspRegEx, ' ').replaceAll(punctuationRegEx, '').toLowerCase();
        }
        
        return postTeasers
            .filter(
                (item) => clean(item.title).includes(searchInputLower) || clean(item.description).includes(searchInputLower)
            ) 
            .map((item) => (
            <M_PostTeaser 
                url={item.link}
                title={item.title}
                description={item.description}
                key={item.id}
            />
        )) 
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