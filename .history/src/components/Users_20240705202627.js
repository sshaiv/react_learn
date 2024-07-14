import {useState} from 'react';

 const[data,setData]=useState('shraddha');


function Users(){
    return(
        <div>{data}</div>
    );

}

export default Users;