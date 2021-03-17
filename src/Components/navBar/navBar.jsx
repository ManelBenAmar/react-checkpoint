import React from "react";
import { Navbar, FormControl, Nav, Form, Button } from "react-bootstrap";

function NavBar() {
    return (
        <Navbar bg="light" variant="light" style={{ width: "100%" }}>
            <Navbar.Brand href="#home">Manel Ben Amar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#aboutus">About Us</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                />
                <Button variant="outline-primary">Search</Button>
            </Form>
        </Navbar>
    );
}

export default NavBar;
