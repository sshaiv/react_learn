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
    <div className="Get">
      <h1>Get API Call</h1>
      <table>
        <tr>
            <td>{item.title}</td>
        </tr>
        {
            data.map((item)=>)
        }
      </table>
    </div>
  );
}

export default Get;
