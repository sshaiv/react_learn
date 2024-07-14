import {useState} from 'react';

 const[data]=useState('');


function Users(){
    return(
        <div>{data}</div>
    );

}

export default Users;