import React from "react";
import Card from "../components/Card";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://statics.olx.in/external/base/img/hero-bg-in.jpg"
        alt=""
      />
      <div className="home__cards">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
