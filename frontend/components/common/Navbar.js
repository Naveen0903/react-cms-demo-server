import {Nav, Navbar, Image} from 'react-bootstrap';
import React from 'react';
import "../../styles/index.scss"

const navbar = ({pageFrom=""}) => {
    return(
        <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">
            <Image 
                src="/images/brand_logo_1.png" 
                alt="Clients pacer"
                href="/"
                className="brandLogo"
                />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {pageFrom == "home"?<><Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Features</Nav.Link>
                <Nav.Link href="#link">Documentation</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
            </Nav></>:""}
        </Navbar.Collapse>
        </Navbar>
    );
}

export default navbar;