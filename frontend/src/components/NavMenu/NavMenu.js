import React from "react";
import {Link} from "react-router-dom";

class NavMenu extends React.Component {

    render()
    {
            return (
                <h1>Here is the navbar</h1>
                // <nav>
                //     <ul>
                //         <li><Link to="Home">Home</Link></li>
                //         <li><Link to="About">About</Link></li>
                //     </ul> 
                // </nav>
            );
    }

}


// const NavMenu = () => {
//     return (
//     <nav>
//         <ul>
//             <li><Link to="Home">Home</Link></li>
//             <li><Link to="About">About</Link></li>
//         </ul> 
//     </nav>
//     );
// };

export default NavMenu;