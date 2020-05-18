import React from "react";
import "./Home.css";
import ebou from "../Image/ebou.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="welcomePage">
        <h2 className="h-home">Web Developer</h2>
        <p className="p-home">
          Hey, my name is Ebou Touray with experience in HTML, CSS, React and
          NodeJs.{" "}
        </p>
        <button className="Readmore">Read More</button>
      </div>
      <div className="photo">
        <img className="rounded-image" src={ebou} alt="ebout" />
      </div>
    </div>
  );
};

export default Home;
