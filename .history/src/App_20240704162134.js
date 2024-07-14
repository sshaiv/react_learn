import React from "react";
import { BrowserRouter,  Routes , Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import contact


function App() {
  return (
  
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/posts' element={<Posts />}/>
      <Route path='/postdetails' element={<Postdetails />}/>



<Route/>
     </Routes>
     </BrowserRouter>
      
  
  );
};

export default App;
