import React from "react";
import "./style.scss";
import HeroBanner from "./heroBannner/HeroBanner";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <div style={{height: "100vh"}}></div>
    </div>
  );
};

export default Home;
