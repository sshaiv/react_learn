import {useState} from 'react';



function Users(){
    const[data,setData]=useState('shraddha');

    return(
        <div>{data}</div>
        <button></button>
    );

}

export default Users;