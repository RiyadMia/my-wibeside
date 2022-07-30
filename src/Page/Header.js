import React from "react";
import About from "../About";
import Blog from "../Blog";
import Contact from "../Contact";
import Footer from "../Footer";
import Headers from "../Headers";
import Project from "../Project";
import Service from "../Service";
const Header = () => {
  return (
    <div className="body">
      <Headers></Headers>
      <About></About>
      <Service />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Header;
