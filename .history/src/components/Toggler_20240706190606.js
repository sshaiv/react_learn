// Hide and Show Element
import React from 'react'


function Toggler(){

    const [status,setStatus]=React.useState(true)
    return(
        <div className="Toggler">
            {
                status? <h1>Hello ! World </h1>:null
            }
<div className='btn' style={{backgroundColor:'red'}}>        
        <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button>            
             </div>
             </div>

    );
}

export default Toggler;