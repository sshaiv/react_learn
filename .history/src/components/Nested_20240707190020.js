import React from "react";

function Nested() {
  const user = [
    {
      name: 'shraddha',
      email: 'shradhha@gmail.com',
      address: [
        { no: '1', city: 'dewas', country: 'India' },
        { no: '2', city: 'Indore', country: 'India' },
        { no: '3', city: 'Pune', country: 'India' },
      ],
    },
    { name: 'sakshi', email: 'sakshi@gmail.com', address: 'xyz' },
    { name: 'abc', email: 'abc@gmail.com', address: 'abc' },
  ];

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                {Array.isArray(item.address) ? (
                  <table border="1">
                    <tbody>
                      {item.address.map((data, idx) => (
                        <tr key={idx}>
                          <td>{data.no}</td>
                          <td>{data.city}</td>
                          <td>{data.country}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  item.address
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Nested;
