import React from "react";
import Card from "../components/Card";
import "./Home.css";
import FooterTop from "../components/FooterTop";
import Banner from "../images/olx.jpeg";

const Home = () => {
  return (
    <div className="home">
      <img src={Banner} alt="" />
      <div className="home__cards">
        <Card />
      </div>
      <FooterTop />
    </div>
  );
};

export default Home;
