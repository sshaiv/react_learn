import React,{useState} from "react";


function Form(){
 const [name, setName] = useState("")
 const [tnc, setTnc] = useState(false)
 const [interest , setInterest] = useState("")
 

 function getData(e){
    console.log(name,tnc,interest);
    e.preventDefault()

 }

    return(
        <div>
<h1>Learn form</h1>
<form onSubmit={getData}>
    <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} /> <br />
    <select  onChange={(e)=>setInterest(e.target.value)} >
        <option >Male</option>
        <option >Female</option>
        <option >other</option>
    </select> <br />
    <input type="checkbox"  onChange={(e)=>setTnc(e.target.value)}  />
    <span>Accept</span> <br />

    <button type='submit'>Submit</button>

</form>
        </div>
    );
}

export default Form;