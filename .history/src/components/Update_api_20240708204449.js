import React, { useEffect, useState } from "react";

function Update_api() {
  const [data, setData] = useState([]);
  const [updateData, setUpdateData] = useState({ id: "", title: "", price: "" });

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

  function updateUser(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        // Update the item in the state
        setData(data.map(item => item.id === id ? resp : item));
        // Clear the update form
        setUpdateData({ id: "", title: "", price: "" });
      });
    });
  }

  function handleUpdateClick(item) {
    setUpdateData(item);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdateData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  console.warn(data);

  return (
    <div className="Get">
      <h1> API Call</h1>
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
                <button onClick={() => handleUpdateClick(item)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Update Product</h2>
        <input
          type="text"
          name="title"
          value={updateData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="price"
          value={updateData.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button onClick={() => updateUser(updateData.id)}>Update</button>
      </div>
    </div>
  );
}

export default Update_api;
