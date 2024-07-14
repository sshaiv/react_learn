import React,{useState}from 'react'

function Input() {

    function setdata(val){
        const[data,setdata]=usestate(null)

        console.log(val.target.value)
        setdata
    }
  return (
    <div>
      <h1>Input</h1>
      <input type="text" onClick={}/>
    </div>
  );
}

export default Input;
