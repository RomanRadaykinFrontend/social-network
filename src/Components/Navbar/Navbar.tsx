import React from "react";
import cl from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function Navbar () {
    return(
        <nav className={cl.nav}>
            <div>
                <NavLink to="/profile" activeClassName={cl.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={cl.activeLink}>Messages</NavLink>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
        </nav>
    )
}


export default Navbar