import React from "react";
import "./Nav.css";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">Ebou Touray</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className="d-inline p-2 bg-light text-black" to="/">
            Home
          </Link>
          <Link className="d-inline p-2 bg-light text-black" to="/about">
            About 
          </Link>
          <Link className="d-inline p-2 bg-light text-black" to="/Blog">
            Blog
          </Link>
          <Link className="d-inline p-2 bg-light text-black" to="/Contact">
            Contact 
          </Link>
          <Link className="d-inline p-2 bg-light text-black" to="/NewPost">
            New Post
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
