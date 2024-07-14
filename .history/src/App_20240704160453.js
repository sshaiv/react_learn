import React from "react";
import { BrowserRouter,  Routes , Route} from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
  
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
</ROute
     </Routes>
     </BrowserRouter>
      
  
  );
};

export default App;
