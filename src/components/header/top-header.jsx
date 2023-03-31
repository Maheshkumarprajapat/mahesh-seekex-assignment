import { iconPhone } from "assets/images";
import React from "react";
import { Container, Nav } from "react-bootstrap";
import "./header.css";
const TopHeader = () => {
  return (
    <div className="top-header">
      <Container>
        <Nav className="justify-content-between">
          <Nav.Link href="#home">Welcome to Our Store Hiscraves</Nav.Link>
          <Nav.Link href="#features">
            <img src={iconPhone} alt="phone" /> Call Us: 1234567890
          </Nav.Link>
        </Nav>
      </Container>
    </div>
  );
};

export default TopHeader;
