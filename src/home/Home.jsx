import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <div className="home-details">
        <div className="home-d">
          <h1>Hello</h1>
          <h2>I'm Md Shahriar Nazim</h2>
          <h3>Front end web developer</h3>
        </div>
        <div className="btn-container">
          <a href="#">
            <button className="btn btn-download">Download CV</button>
          </a>
          <a href="#demo">
            <button className="btn btn-sample">Sample work</button>
          </a>
        </div>
      </div>
      <div className="my-pic-container">
        <img src="img/my1.png" className="my-pic-home" alt="My pic" />
      </div>
    </div>
  );
};

export default Home;
