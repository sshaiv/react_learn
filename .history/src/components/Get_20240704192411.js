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
      <table border="1">
        <tr>
            <td>ID</td>
        </tr>
        {
            data.map(()=>
            <tr>
                <td>ID</td>
                <td>price</td>
                <td>title</td>
            </tr>
        )
        }
      </table>
    </div>
  );
}

export default Get;
