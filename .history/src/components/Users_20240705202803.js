import { useState } from "react";

function Users() {
  const [data, setData] = useState("shraddha");

  return (
    <div>
      <h1>{data}</h1>
      <button >CLick me</button>
    </div>
  );
}

export default Users;