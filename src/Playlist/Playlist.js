import React from "react";
import Track from "../Track/Track";

function Playlist() {
    return (
        <div className="Playlist">
            <input type='text' placeholder='Enter Playlist name'/>
            <ul>
                <Track />
            </ul>
            <input type='submit'/>
        </div>
    )
};

export default Playlist;