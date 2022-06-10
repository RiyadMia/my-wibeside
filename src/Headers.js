import React from "react";
import Project from "../src/img/riyady.png";
const Headers = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-12 lg:flex-row home__content">
        <div className="home__meta">
          <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
          <h2 className="home__text pz__10">Hi, I’m Mr Riyad </h2>
          <h3 className="home__text sweet pz__10">JS Developer &</h3>
          <h4 className="home__text pz__10"> Web Designer</h4>
        </div>
        <div className="">
          <img
            style={{ height: "500px", wedth: "300px" }}
            src={Project}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Headers;
