import React,{useState}from 'react'

function Input() {
    const[data,setdata]=useState(null)

    function getData(val){
        
        console.log(val.target.value)
        setdata(val.target.value)
    }

  return (
    <div>
        <h1>type here</h1>
      <h1>{data}</h1>
      <input style={{margin:'20px',padding:'20px',width:'250px'}} type="text" onChange={getData}/>
    </div>
  );
}

export default Input;
