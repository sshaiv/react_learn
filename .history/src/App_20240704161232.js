import React from "react";
import { BrowserRouter,  Routes , Route} from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
  
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/' element={<About />}/>

<Route/>
     </Routes>
     </BrowserRouter>
      
  
  );
};

export default App;
