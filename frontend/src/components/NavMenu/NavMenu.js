import React from "react";
import {Link} from "react-router-dom";
import './NavMenu.scss';
class NavMenu extends React.Component {

    render()    
    {
            return (
                <div className="wrapper flex-row">
                    <div class="container brand-wrapper">
                        <div class="logo-cnt flex-row">
                            <img src="../../../assets/img/logo-social.png"></img>
                        </div>
                    </div>
                    <div class="container navigation-wrapper">
                        {this.navigationList()}
                    </div>
                </div>
            );
    }

    // Navigation items list of menu.
    navigationList()
    {
        return (
            <h1>yo</h1>
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