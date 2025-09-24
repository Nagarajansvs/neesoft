import React from "react";
import { Navbar, Nav, Container, NavDropdown, Image } from "react-bootstrap";
import logo from "../../src/assets/logo.png";
import user from "../../src/assets/profile.svg";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="md" className="border-bottom bg-header">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="./login">
          <img src={logo} alt="logo" className="site_logo img-fluid" />
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          {/* Left side nav */}
          <Nav className="me-auto mb-2 mb-sm-0">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              aria-current="page"
              to="/project"
            >
              {" "}
              Project{" "}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              aria-current="page"
              to="/addproject"
            >
              {" "}
              Add Project{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              aria-current="page"
              to="/view"
            >
              {" "}
              View{" "}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              aria-current="page"
              to="/projectlabel"
            >
              {" "}
              Project Label{" "}
            </NavLink>
          </Nav>

          {/* Right side nav */}
          <Nav className="align-items-center text-center">
            <Nav.Item className="me-3">
              <span className="nav-link" style={{ color: "#222" }}>
                Welcome{" "}
                <span style={{ color: "var(--primary-color)" }}>Admin</span>
              </span>
            </Nav.Item>

            <NavDropdown
              align="end"
              id="profile-dropdown"
              title={
                <Image
                  src={user}
                  alt="profile"
                  width="32"
                  height="32"
                  roundedCircle
                  className="user_profile_icon"
                />
              }
            >
              <NavDropdown.Item
                className="profile-dropdown-menu"
                href="./login"
              >
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
