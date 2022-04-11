import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";

    const Navbar = () => {
        return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
        );
    };

    export default Navbar;