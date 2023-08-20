import React from "react";
import "./App.css"
import logo from './logo.svg';
import { useNavigate } from "react-router-dom";

const Home =() =>{
  const navigate = useNavigate();
  const startBrowsing =() =>{
    navigate("/twelveth")
  }
    return (
        <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click to See Course Details
        </p>
        <div
          className="App-link"
          onClick={startBrowsing}
        >
          Start Browsing</div>
      </header>
    </div>
    )
}
export default Home;