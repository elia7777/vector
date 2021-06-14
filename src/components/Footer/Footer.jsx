import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <NavLink to="/" className="logo-font">
        Vector
        </NavLink>
        <span className="attribution">
          © 2021. Project by elia7777. &nbsp; 
          <a href="https://github.com/elia7777">Github</a>. &nbsp;  Code licensed under
          MIT.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
