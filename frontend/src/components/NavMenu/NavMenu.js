import React from "react";
import {Link} from "react-router-dom";
import './NavMenu.scss';
class NavMenu extends React.Component {

    render()    
    {
            return (
                <div className="component-wrapper flex-row">

                    {/* logo component */}
                    <div class="brand-cnt">
                        {this.brandMenuComponent()}
                    </div>

                    {/* navigation list component */}
                    <div class="navigation-cnt flex-row-jcenter">
                        {this.navigationMenuListComponent()}
                    </div>

                </div>
            );
    }

    //Logo component
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
            <ul className="navigation-list flex-row-jcenter-acenter">
                <li>Home</li>
                <li>About</li>
                <li>Code Editor</li>
            </ul>
        );
    }
}
export default NavMenu;