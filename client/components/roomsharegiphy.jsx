import React from 'react';

export default function RoomShareGiphy() {
    return (
        // <div className="giphy-div">
        //     <iframe src="https://giphy.com/embed/Q8Hmu1z4kFN7sNpJoT" height="5px" width="5px" scrolling="no" className="giphy-embed" allowFullScreen></iframe>
        // </div>
        <div>
            <div style={{width:"100%", height:"0", paddingBottom:"50%", position:"relative"}}><iframe src="https://giphy.com/embed/Q8Hmu1z4kFN7sNpJoT" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/Q8Hmu1z4kFN7sNpJoT">via GIPHY</a></p>
        </div>
    );
};