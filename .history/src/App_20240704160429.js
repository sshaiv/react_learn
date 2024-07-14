import React from "react";
import { BrowserRouter,  Routes , Route} from "react-router-dom";
import Ho
function App() {
  return (
  
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>

     </Routes>
     </BrowserRouter>
      
  
  );
};

export default App;
