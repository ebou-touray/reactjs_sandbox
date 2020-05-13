import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Ebou Touray</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Link className="d-inline p-2 bg-dark text-white" to="/">
            Home
          </Link>
          <Link className="d-inline p-2 bg-dark text-white" to="/about">
            About Me
          </Link>
          <Link className="d-inline p-2 bg-dark text-white" to="/Blog">
            Blog
          </Link>
          <Link className="d-inline p-2 bg-dark text-white" to="/Contact">
            Contact me
          </Link>
          <Link className="d-inline p-2 bg-dark text-white" to="/NewPost">
            New Post
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
