import React from "react";
import Player from "./Player"
import Song from "./Song"
import Volume from "./Volume"

function Footer(props) {
  return <div className="footer">
    <Song/>
    <Player accessToken={props.accessToken} trackUri={ props.trackUri } />
    <Volume />
  </div>;
}

export default Footer;
