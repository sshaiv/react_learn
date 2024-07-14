import React, { useEffect, useState } from "react";

function Delete_api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((result)=>{
       result.json().then((resp)=>{
       setData(resp)
})
      });
      
  }, []); 

  function deleteUser(id){
    alert(id)
  }
  // Empty dependency array ensures useEffect runs only once on mount
console.warn(data);
  return (
    <div className="Get">
      <h1>Get API Call</h1>
      <table border="1">
        <tr>
            <td>ID</td>
           
            <td>title</td>
            <td>price</td>
        </tr>
        
        
        {
            data.map((item)=>
            <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td><button onClick={()=>deleteUser(item.u)}>Delete</button></td>
                
            </tr>
        )
        }
      </table>
    </div>
  );
}

export default Delete_api;
