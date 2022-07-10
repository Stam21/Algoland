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
                        {this.brandMenuComponent()}
                    </div>
                    {/* END OF - Brand component */}

                    {/* Nav-bar component*/}
                    <div class="navigation-cnt flex-row-center">
                        {this.navigationMenuListComponent()}
                    </div>
                    {/* END OF - Nav-bar component */}
                </div>
            );
    }

    brandMenuComponent() 
    {
        return (
            <div class="logo-cnt flex-row">
                <img src="../../../assets/img/logo-social.png"></img>
            </div>
        )
    }

    // Navigation items list of menu.
    navigationMenuListComponent()
    {
        return (
            <ul className="navigation-list flex-row-center">
                <li>Home</li>
                <li>About</li>
                <li>Code Editor</li>
            </ul>
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