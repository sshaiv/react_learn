import React from "react";
import { Link } from "react-router-dom";


const Navbar=()=>{
    return(
        <div><h1>Navbar</h1>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        </div>
    );
};

export default Navbar;