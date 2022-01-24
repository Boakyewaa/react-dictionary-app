import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import './Dictionary.css';

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState (false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){
        setResults(response.data[0]); 
    }
    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){
        // documentation: https://dictionaryapi.dev/e
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey= "563492ad6f91700001000001cf19858656e34db9b600d7038135622d";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = {Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl,{ headers: headers}).then(handlePexelsResponse);

    }
    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
    
    if (loaded){
    return (
        <div className="Dictionary">
            <section>
                <h1 className="header">What are you looking for?</h1>
              <form className="Input" onSubmit={handleSubmit}>
                <input type="search" placeholder="Search for a Word" autoFocus={true} onChange={handleKeywordChange}/>
            </form>
            <span className="hint">Suggested words: hello,love,art</span>  
            </section>
            <Photos photos= {photos}/>
            <Results results={results} />
        </div>
    );
    }else { 
        load();
        return "Loading";
    }
    
}