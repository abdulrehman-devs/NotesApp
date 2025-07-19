import Navbar from "../components/navbar";
import React from "react";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div>
        <div className="img"></div>
        <div className="mainheading">A clean space for <br /> the messy minds.</div>
      </div>
    </div>
  );
};
