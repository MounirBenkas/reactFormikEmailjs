import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navBar">
      <div className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
