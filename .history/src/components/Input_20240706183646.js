import React,{useState}from 'react'

function Input() {

    function setdata(val){
        const[data,setdata]=usestate(null)

        console.log(val.target.value)
        setdata(val.target.value)
    }
  return (
    <div>
      <h1>{data}</h1>
      <input type="text" onClick={setdata}/>
    </div>
  );
}

export default Input;
