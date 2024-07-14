import React from "react";


function Nested(){
    const user=[
        {name:'shraddha',email:'shradhha@gmail.com',address:[
            {no:'1',city:'dewas' }
        ]},
        {name:'sakshi',email:'sakshi@gmail.com',contact:'222'},
        {name:'abc',email:'abc@gmail.com',contact:'000'},
    ];
return(
<div>
    <table>
        <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
        </tr>
        {
            user.map((item)=>
                <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                </tr>
            )
        }
    </table>
</div>
);
}

export default Nested;