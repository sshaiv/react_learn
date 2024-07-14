import { useState } from "react";

function Users() {
  const [data, setData] = useState("shraddha");

  function updateData() {
    
  }

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>Click me</button>
    </div>
  );
}

export default Users;
