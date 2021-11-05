import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navBar">
      <h3 className="logo_title">MBK</h3>
      <div className="menu">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </div>
    </div>
  );
};

export default Navigation;
