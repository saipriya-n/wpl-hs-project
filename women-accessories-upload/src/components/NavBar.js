import React from 'react';
import './NavBar.css';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { BsFillFilePersonFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { BsFillBagCheckFill } from "react-icons/bs";

function NavBar() {
        return (
            <div className='App tc f3'>
               <Navbar bg='light' expand='lg'>
                 <Navbar.Brand href="#home" className="navBarItemsStyle">S&H Women's Accesories</Navbar.Brand>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                   <Nav className='mr-auto navBarStyle'>
                     <Nav.Link href="#shoes" className="navBarItemsStyle" title="Tricks site">Shoes</Nav.Link>
                     <Nav.Link href="#handbags" className="navBarItemsStyle">Handbags</Nav.Link>
                     <Nav.Link href="#home" className="navBarItemsStyle">Home</Nav.Link>
                     <Nav.Link href="#about" className="navBarItemsStyle">About</Nav.Link>
                     {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                       <NavDropdown.Item href="#action/shoes">Shoes</NavDropdown.Item>
                       <NavDropdown.Item href="#action/handbags">Handbags</NavDropdown.Item>
                     </NavDropdown> */}
                     <Nav.Link href="#contactus" className="navBarItemsStyle">Contact US</Nav.Link>
                     <Form className="d-flex navBarForm navBarItemsStyle">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-"
                        aria-label="Search" 
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                     <Nav.Link href="#profileDetails" className="navBarItemsStyle2"><BsFillFilePersonFill className="iconStyle" /></Nav.Link>
                     <Nav.Link href="#wishlist" className="navBarItemsStyle"><BsFillHeartFill className="iconStyle" /></Nav.Link>
                     <Nav.Link href="#bag" className="navBarItemsStyle"><BsFillBagCheckFill className="iconStyle" /></Nav.Link>
                   </Nav>
                 </Navbar.Collapse>
               </Navbar>
             </div>
      );
}
export default NavBar;
