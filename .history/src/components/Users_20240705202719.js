import {useState} from 'react';



function Users(){
    const[data,setData]=useState('shraddha');

    return(
        <div>{data}</div>
        <button>CLick me</button>
    );

}

export default Users;