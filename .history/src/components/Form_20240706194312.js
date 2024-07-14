import React,{useState} from "react";


function Form(){
    return(
        <div>
<h1>Learn form</h1>
<form onSubmit={getData}>
    <input type="text" placeholder="enter name" /> <br />
    <select name="" id=""></select>

</form>
        </div>
    );
}

export default Form;