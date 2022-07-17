import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './Navbar.module.scss'

export default class Navbar extends React.Component {
    static async getInitialProps()
    {
        return {}
    }
    render()
    {
        return (

            <div className="component-wrapper flex-row">

                {/* logo component */}
                <div className="brand-cnt">
                    <div className="logo-cnt flex-row">
                        <Image src={'/../public/logo-social.png'} alt='Home Page' width={100} height={100} />
                    </div>
                </div>

                {/* navigation list component */}
                <div className="navigation-cnt">
                    {this.navigationMenuListComponent()}
                </div>

            </div>
            // <div>
            //     <Link href='/'><a>Home</a></Link>
            //     <Link href='/about'><a>About</a></Link>
            // </div>
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

// const Navbar = () => {
//     return (
//         <div>
//             <Link href='/'><a>Home</a></Link>
//             <Link href='/about'><a>About</a></Link>
//         </div>
//     )
// }

// export default Navbar;