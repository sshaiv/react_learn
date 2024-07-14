import React from "react";
import { Link } from "react-router-dom";
import "./Hom.css"; // Import CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">
          <Link to="/">Your Logo</Link>
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;