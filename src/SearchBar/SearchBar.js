import React from "react";

function SearchBar (){
    return (
        <div className="SearchBar">
            <input type='text' placeholder='Enter a song title'/>
            <input type='submit' />
        </div>
    )
};

export default SearchBar;