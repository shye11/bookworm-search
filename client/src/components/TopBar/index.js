import React from "react";
import {Button, Navbar, Nav, Form, FormControl} from "react-bootstrap";
import "./style.css";


const TopBar = () => (
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#/saved">Google Book Search</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#/saved">Saved Books</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
</>
);

export default TopBar;
