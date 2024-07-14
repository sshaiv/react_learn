// Hide and Show Element
import React from 'react'


function Toggler(){

    const [status,setStatus]=React.useState(true)
    return(
        <div className="Toggler">
            {
                status? <h1>Hello ! World </h1>:null
            }

            <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>}>Show</button>            
             </div>
    );
}

export default Toggler;