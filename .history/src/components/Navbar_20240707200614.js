import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">
          <Link to="/">SS</Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/get">Get</Link>
          </li>
          <li>
            <Link to="/postform">Post_api</Link>
          </li>
          <li>
            <Link to="/props">Props</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
          <li>
            <Link to="/toggler">Toggler</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to='/condition'>Condition</Link>
          </li>
          <li>
            <Link to='/use_list'>map</Link>
          </li>
          <li>
            <Link to='/nested'>Nested</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
