import { useState } from "react";

function Users() {
//   const [data, setData] = useState("shraddha");
const [data, setData] = useState(0);


  function updateData() {
  set
    // setData(alert('Shaiv'));
  }

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>Click me</button>
    </div>
  );
}

export default Users;