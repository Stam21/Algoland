import React from "react";
import {Link} from "react-router-dom";
import './NavMenu.scss';
class NavMenu extends React.Component {

    render()    
    {
            return (
                <div className="component-wrapper flex-row">
                    {/* Brand component */}
                    <div class="brand-cnt">
                        <div class="logo-cnt flex-row">
                            <img src="../../../assets/img/logo-social.png"></img>
                        </div>  
                    </div>
                    {/* END OF - Brand component */}

                    {/* Nav-bar component*/}
                    <div class="navigation-cnt">
                        {this.navigationMenuListComponent()}
                    </div>
                    {/* END OF - Nav-bar component */}
                </div>
            );
    }

    // Navigation items list of menu.
    navigationMenuListComponent()
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