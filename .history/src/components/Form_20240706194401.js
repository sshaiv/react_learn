import React,{useState} from "react";


function Form(){
    return(
        <div>
<h1>Learn form</h1>
<form onSubmit={getData}>
    <input type="text" placeholder="enter name" /> <br />
    <select >
        <option >Male</option>
        <option >Female</option>
        <option >other</option>
    </select>
    <input type="checkbox" name="" id="" />

</form>
        </div>
    );
}

export default Form;