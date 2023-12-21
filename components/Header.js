"use client";

import Image from "next/image";
import { useRef } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";


const Header = () => {

  return (
    <Navbar expand className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-white">ClassroomsMVP<img
            className="ms-2"
            src="bezier.svg"
            alt="Bootstrap"
            width="20"
            height="20"
          ></img></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#create" className="text-white" onClick={''}>Create room</Nav.Link>
            <Nav.Link  className="disabled text-white">Create student</Nav.Link>
            <Nav.Link  className="disabled text-white">View rooms
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

