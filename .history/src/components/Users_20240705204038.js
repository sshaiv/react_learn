import { useState } from "react";

function Users() {
//   const [data, setData] = useState("shraddha");
const [data, setData] = useState(0);


  function updateData() {
  setData(data+1)
    // setData(alert('Shaiv'));
  }
  console.warn('...')

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={updateData}>Click me</button>
    </div>
  );
}

export default Users;
