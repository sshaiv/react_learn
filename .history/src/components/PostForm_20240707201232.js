import React, { useEffect,useState } from "react";


const PostForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
const response = await axios.post("https://http://localhost:3000/postform", data, {


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
