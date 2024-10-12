import React from "react";
import Tracklist from "../Tracklist/Tracklist";

function Playlist() {
    return (
        <div>
            <input type='text' placeholder='Enter Playlist name'/>
            <Tracklist />
            <input type='submit'/>
        </div>
    )
};

export default Playlist;