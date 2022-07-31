import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../././img/logo.png";
const Navbar = () => {
  // window.addEventListener("scroll", function () {
  // const header = document.querySelector(".header");
  // header.classList.toggle("active", window.scrollY > 0);
  // });
  const munus = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
        <Link to={"/Service"}>Services</Link>
        <Link to={"/Portfolio"}>Portfolio</Link>
        <Link to={"/Contact"}>Contact</Link>
        <Link to={"/blogs"}>Blogs</Link>
        <Link to={"/About"}>About</Link>
      </li>
    </>
  );

  return (
    <div className="font-bold navbar bg-base-100 header ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {munus}
          </ul>
        </div>
        <p className=" ml-9">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </p>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="p-0 menu menu-horizontal">{munus}</ul>
      </div>
    </div>
  );
};

export default Navbar;
