"use client";

import { Container, Nav, Navbar } from "react-bootstrap";

const Header = ({ setComponent }) => {
  const handleOnClick = (buttonClicked) => {
    setComponent(buttonClicked);
  };

  return (
    <Navbar expand className="bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          ClassroomsMVP
          <img
            className="ms-2"
            src="bezier.svg"
            alt="Bootstrap"
            width="20"
            height="20"
          ></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#room"
              className="text-white"
              onClick={() => handleOnClick("Create room")}
            >
              Create room
            </Nav.Link>
            <Nav.Link
              href="#student"
              className="text-white"
              onClick={() => handleOnClick("Create student")}
            >
              Create student
            </Nav.Link>
            <Nav.Link
              href="#view"
              className="text-white"
              onClick={() => handleOnClick("View rooms")}
            >
              View rooms
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
