import React, { Component } from "react";

//stateless functional component

const NavBar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge bg-secondary bg-sm m-2">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
