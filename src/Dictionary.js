import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import './Dictionary.css';

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
        

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary">
            <section>
              <form className="Input" onSubmit={search}>
                <input type="search" placeholder="Search Word" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
            <span className="hint">Suggested words: hello,love,art</span>  
            </section>
            <Results results={results} />
        </div>
    );
}