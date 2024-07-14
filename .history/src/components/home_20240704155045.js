import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Post from './Post';
import Contact from './Contact';
import About from './About';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Home;
