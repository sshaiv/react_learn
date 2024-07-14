import { useState } from "react";

function Users() {
  const [data, setData] = useState("shraddha");

  function newdata(){
    

  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={()=>(newdata)}>CLick me</button>
    </div>
  );
}

export default Users;
