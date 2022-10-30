import React from "react";
import Links from "./Links";
import Playlists from "./Playlists";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top-links">
        <Links
          icon1={"Home"}
          icon2={"Search"}
          icon3={"Menu_Open"}
          description1={"Home"}
          description2={"Search"}
          description3={"Your Library"}
        />
        <Links
          icon1={"Add_Box"}
          icon2={"Favorite"}
          icon3={"Bookmark"}
          description1={"Add Playlist"}
          description2={"Liked Songs"}
          description3={"Your Episodes"}
        />
      </div>
      <div className="bottom-links">
        <Playlists />
      </div>
    </div>
  );
}

export default Sidebar;
