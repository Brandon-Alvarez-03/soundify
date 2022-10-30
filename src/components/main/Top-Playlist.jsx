import React from "react";

function TopPlaylist(props) {
  return (
    <div className="top-playlist">
      <img className="playlist-img"
        src={props.artUrl}
        // alt={props.title}
        width="300"
        height="300"
      ></img>
      {props.title}
    </div>
  );
}

export default TopPlaylist;
