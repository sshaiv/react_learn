import {useState} from 'react'



function Condition(){

    const [loggedIn,setLoggedIn]=useState(false)
return(
    <div>
{loggedIn? <h1>LoggeIN</h1>: }
    </div>
);
}
export default Condition;