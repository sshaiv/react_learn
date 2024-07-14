import {useState} from 'react';

 const[data,set]=useState('');


function Users(){
    return(
        <div>{data}</div>
    );

}

export default Users;