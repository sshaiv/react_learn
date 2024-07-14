import React, { useState } from "react";

const PostForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const saveUser = () => {
    console.warn({ name, email });

    let data = { name, email };

    fetch('http://localhost:3001/postform', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then((result) => result.json())
    .then((response) => {
      console.warn('result:', response);
      setMessage('Hello, connected to the server!');
    })
    .catch((error) => {
      console.error('Error:', error);
      setMessage('Failed to connect to the server');
    });
  }

  return (
    <div>
      <h1>POST API</h1>
      <input type="text" name="name" placeholder="" value={name} onChange={(e) => { setName(e.target.value) }} /> <br /><br />
      <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
      <button type="button" onClick={saveUser}>Save New User</button>
      <p>{message}</p>
    </div>
  );
};

export default PostForm;
