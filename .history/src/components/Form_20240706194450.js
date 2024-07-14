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
    </select> <br />
    <input type="checkbox"  />
    <span>Accept</span> <br />

    <button>Submit</button>

</form>
        </div>
    );
}

export default Form;