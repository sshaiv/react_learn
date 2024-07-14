import React from "react";
import { Link, Route } from "react-router-dom";
import './style.css';
import About from "./";
import Contact from "./Contact";
import Post from "./Post";

const Home = () => {
    return (
        <div className="nav">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>

            {/* Define routes for each link */}
            <Route exact path="/" component={Home} />
            <Route path="/post" component={Post} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
        </div>
    );
};

export default Home;
