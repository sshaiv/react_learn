import React from "react";
import { BrowserRouter,  Routes , Route} from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
  
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
</Route/></BrowserRouter>
     </Routes>
     </BrowserRouter>
      
  
  );
};

export default App;
