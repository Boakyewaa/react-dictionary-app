import React, { useState } from "react";
import './Dictionary.css';

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function search(event){
        event.preventDefault();
        alert(`Searching ${keyword} definition`);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="Search Word" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
        </div>
    );
}