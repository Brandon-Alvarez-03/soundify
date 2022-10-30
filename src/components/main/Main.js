import React from "react";
import TP from "./Top-Playlist.jsx";
import SongRow from "./Song-Row.jsx";
import {useState, useEffect} from "react";
import axios from "axios";

function Main() {
  const [getTitle, setGetTitle] = useState(null);
  const [getArt, setGetArt] = useState(null);

  useEffect(() => {
    const getMusicData = async () => {
      const res = await axios.get(
        "https://open.spotify.com/oembed?url=spotify:artist:2ye2Wgw4gimLv2eAKyk1NB&callback=?"
      );
      console.log(res.data);
      setGetTitle(res.data.title)
      setGetArt(res.data.thumbnail_url)
    };
    getMusicData();
  }, []);

  // "GET" "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/albums?limit=20" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAIPehqtZeyQSSdgQSt8IB4pqVVyf6wTb7w5LE76dq8d3Q_bfHZ7SKG_vJIQc_0ysCwBNjit0Wx_oeo-ZEbZxq70OYvva04bgJFoWtX0Z76wJYYoxMhSnrAZHx4zy_geMvzDm0Fs9iQ7KPSHh1zNptR41cTCBeC78tiFpzUx-5uC0E"

  // await if (!getData) return console.log("error: no data available");

  return (
    <div className="main">
      <div className="top-6-container">
        <p className="greeting">Good Afternoon</p>
        <div className="top-6">
          <TP title={getTitle} artUrl={ getArt } />
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
