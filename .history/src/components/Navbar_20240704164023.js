import React from "react";
import { Link } from "react-router-dom";


const Navbar=()=>{
    return(
        <div><h1>Navbar</h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/'>Home</Link></li>
        </ul>

        </div>
    );
};

export default Navbar;