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
      
  }, []); // Empty dependency array ensures useEffect runs only once on mount
log
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Get;
