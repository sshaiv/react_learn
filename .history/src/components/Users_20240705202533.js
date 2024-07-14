import {useState} from 'react';

 const[data,setData]=useState('');


function Users(){
    return(
        <div>{data}</div>
    );

}

export default Users;