import React from "react";
import {Link} from "react-router-dom";

const NavMenu = () => {
    return <nav>
        <ul>
            <li><Link to="Home">Home</Link></li>
            <li><Link to="About">About</Link></li>
        </ul> 
    </nav>
}

export default NavMenu;