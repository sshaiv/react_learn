import React, { useEffect,useState } from "react";


const PostForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  


  return (
    <div>
        <h1>POST API</h1>
        <input type="text" name="name" /> <br /><br />
        <input type="text" name="email" /><br /><br />

        <button type> Save New User</button>
        
    </div>
  );
};

export default PostForm;
