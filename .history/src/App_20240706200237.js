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
import Input from './components/Input'
import Toggler from './components/Toggler'
import Form from './components/Form'
import Condition from './components/'

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
        <Route path='/input' element={<Input />} />
        <Route path='/toggler' element={<Toggler />} />
        <Route path='/form' element={<Form />} />
        <Route path='/posts/:postId' element={<PostDetails />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
