import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Get from './components/Get'
import Users from './components/Users'
import Props from './components/Props'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/get' element={<Get />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Props' element={<Props name={'shraddha'}/>} />
        <Route path='/' element={<Users />} />
        <Route path='/posts/:postId' element={<PostDetails />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
