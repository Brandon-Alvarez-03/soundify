import Nav from "./components/nav/Nav.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer.js";
import {useEffect, useState} from "react";
import axios from "axios";

import "./App.css";


function App() {
  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
