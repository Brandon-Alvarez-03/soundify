import React from "react";
import Player from "./Player"
import Song from "./Song"
import Volume from "./Volume"

function Footer() {
  return <div className="footer">
    <Song/>
    <Player />
    <Volume />
  </div>;
}

export default Footer;
