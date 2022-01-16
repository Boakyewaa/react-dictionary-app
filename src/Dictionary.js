import React, { useState } from "react";
import './Dictionary.css';

export default function Dictionary(){
    function search(event){
        event.preventDefault();
        alert("Searching")
    }
    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" placeholder="Search Word" autoFocus={true}/>
            </form>
        </div>
    );
}