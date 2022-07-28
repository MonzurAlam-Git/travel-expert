import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../../../src/images/logo.png";

const Header = () => {
  const searchIcon = <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>;

  return (
    <Navbar sticky="top" className="container " bg="none" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="me-3" href="#">
          <img
            className="bg-white p-1"
            height="56"
            width="120"
            src={logo}
            alt=""
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              className="ms-5"
              style={({ height: "44px" }, { width: "420px" })}
              // height="44"
              // width="370"
              type="search"
              // placeholder={searchIcon}
              placeholder="Search Your Destination"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>

          <Nav
            className="ms-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="ms-3 me-3 fw-bold" as={Link} to="/news">
              News
            </Nav.Link>
            <Nav.Link className="me-3 fw-bold" href="#services">
              Services
            </Nav.Link>
            <Nav.Link className="me-3 fw-bold" as={Link} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link className="me-3 fw-bold" as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="bg-warning fw-bold" as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
