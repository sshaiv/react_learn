import React,{useState}from 'react'

function Input() {
    const[data,setdata]=useState(null)

    function getData(val){
        
        console.log(val.target.value)
        setdata(val.target.value)
    }

  return (
    <div>
        <h1>Start here</h1>
      <h3 style={{color:'red'}}>{data}</h3>
      <input style={{margin:'20px',padding:'20px',width:'250px'}} type="text" onChange={getData}/>
    </div>
  );
}

export default Input;
