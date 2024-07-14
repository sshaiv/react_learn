import React, { useEffect, useState } from "react";

function Get() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((result)=>{
       result.json().then((resp)=>{
       setData(resp)
})
      });
      
  }, []); 
  // Empty dependency array ensures useEffect runs only once on mount
console.warn(data);
  return (
    <div>
      
    </div>
  );
}

export default Get;
