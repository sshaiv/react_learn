import React, { useEffect, useState } from "react";

function DeleteApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then((result) => {
        result.json().then((resp) => {
          setData(resp);
        });
      });
  }, []); 

  function deleteUser(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        // Remove the deleted item from the state
        setData(data.filter(item => item.id !== id));
      });
    });
  }

  console.warn(data);

  return (
    <div className="Get">
      <h1>Get API Call</h1>
      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => deleteUser(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeleteApi;
