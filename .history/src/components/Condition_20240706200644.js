import {useState} from 'react'



function Condition(){

    const [loggedIn,setLoggedIn]=useState(false)
return(
    <div>
       <h1>{loggedIn}</h1> 
    </div>
);
}
export default Condition;