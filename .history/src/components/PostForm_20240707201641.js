import React, { useEffect,useState } from "react";


const PostForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  

  function saveUser() {
    war
  }

  return (
    <div>
        <h1>POST API</h1>
        <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br /><br />

        <button type="button"> Save New User</button>
        
    </div>
  );
};

export default PostForm;
