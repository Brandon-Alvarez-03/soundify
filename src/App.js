import React, { useEffect } from "react";
import Login from "./components/Login"
import Dashboard from "./components/Dashboard.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const code = new URLSearchParams(window.location.search).get("code");

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=73092f3c3afc421b9e3831fa6a219017&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";


function App() {

  // window.onload = function () {
  //   // similar behavior as an HTTP redirect
  //   window.location.replace({AUTH_URL});
  // };
  return <Dashboard code={ code } /> 
}
export default App;
