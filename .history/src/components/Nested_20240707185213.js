import React from "react";


function Nested(){
    const user=[
        {name:'shraddha',email:'shradhha@gmail.com',address:[
            {no:'1',city:'dewas',country:'India' },
            {no:'2',city:'Indore',country:'India' },
            {no:'3',city:'Pune',country:'India' },

        ]},
        {name:'sakshi',email:'sakshi@gmail.com',address:'xyz'},
        {name:'abc',email:'abc@gmail.com',address:'abc'},
    ];
return(
<div>
    <table>
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
        </tr>
        {
            user.map((item)=>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{
                       item.address
                        }</td>
                </tr>
            )
        }
    </table>
</div>
);
}

export default Nested;