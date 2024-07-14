import React from "react";
import "./Home.css"; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1>Welcome to Your Website</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          lobortis lacinia velit, eu gravida tortor ullamcorper nec. Integer
          vitae metus sed nunc sagittis vehicula ac sit amet justo. Donec
          ullamcorper urna et ante pellentesque, non lobortis tortor auctor.
          Nunc egestas purus at posuere tincidunt.
        </p>
        <button className="btn">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
