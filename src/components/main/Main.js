import React from "react";
import TP from "./Top-Playlist.jsx";
import SongRow from "./Song-Row.jsx";
import {useState, useEffect} from "react";
import axios from "axios";

function Main() {
  const [getData, setGetData] = useState(null);

  useEffect(() => {
    const getMusicData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/search?q=tania%20bowra&type=artist"
      );
      setGetData(response.data);
      console.log(response.data);
    };
    getMusicData();
  }, []);

  // if (!getData) return console.log("error: no data available");

  return (
    <div className="main">
      <div className="top-6-container">
        <p className="greeting">Good Afternoon</p>
        <div className="top-6">
          <TP title={"Playlist 1"} />
          <TP title={"Playlist 2"} />
          <TP title={"Playlist 3"} />
          <TP title={"Playlist 4"} />
          <TP title={"Playlist 5"} />
          <TP title={"Playlist 6"} />
        </div>
      </div>
      <div className="songs-container">
        <p className="recommendation">Songs you might like</p>
        <div className="song-row-container">
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
          <SongRow />
        </div>
      </div>
    </div>
  );
}

export default Main;
