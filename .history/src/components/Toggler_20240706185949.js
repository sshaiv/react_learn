// Hide and Show Element
import React from'react


function Toggler(){

    const [status,setStatus]=React.useState(true)
    return(
        <div className="Toggler">
            {

            }

            <button onClick={()=>}>Hide</button>
            <button onClick={()=>}>Show</button>            
             </div>
    );
}

export default Toggler;