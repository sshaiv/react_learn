import React from "react";
import { Link } from "react-router-dom"; // Import Link component
import "./Home.css"; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to MyLearning Website</h1>
        <p>Hello, welcome to my learning website ('reactjs')</p>
        <Link to="/about">
          <button className="btn">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;