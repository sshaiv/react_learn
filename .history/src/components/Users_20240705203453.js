import { useState } from "react";

function Users() {
  const [data, setData] = useState("shraddha");

  function updateData() {
    setData('Shaiv');
  }

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={alert('{updateData})}>Click me</button>
    </div>
  );
}

export default Users;
