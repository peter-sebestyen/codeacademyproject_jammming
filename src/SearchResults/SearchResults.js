import React from "react";
import Track from "../Track/Track";

function SearchResults() {
    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <ul>
                <Track />
            </ul>
        </div>
    )
};

export default SearchResults;