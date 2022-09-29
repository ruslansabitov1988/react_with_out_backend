import React from "react";
import {Navbar, Nav, NavLink} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BootstrapNavbar.css"


const BootstrapNavbar = ()=>{

    return(
        <Navbar collapseOnSelect bg="danger" expand = "sm">
            <Navbar.Toggle aria-control = "myNavbar"/>
            <Navbar.Collapse>
                <Nav id="myNavbar" className="navbar">
                    <NavLink style={{color:"white"}} as={Link} to='/'> Home </NavLink>
                    <NavLink style={{color:"white"}} as={Link} to='/marscamera'> MarsCamera </NavLink>
                    <NavLink style={{color:"white"}} as={Link} to='/artist'> Artist </NavLink>
                    <NavLink style={{color:"white"}} as={Link} to='/about'> About </NavLink>

                    <NavLink style={{color:"white"}} as={Link} to='/check'> Check </NavLink>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default BootstrapNavbar