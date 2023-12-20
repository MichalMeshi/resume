import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaHome, FaListUl, FaRegListAlt, FaSignInAlt } from 'react-icons/fa';
import { SiGnuprivacyguard } from "react-icons/si";
import UserContext from '../../context/userContext';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'

const CustomNavbar = () => {
  const { userData ,getUserRoleByEmail} = useContext(UserContext);
  const [localRole, setLocalRole] = useState('user'); // Default role to user
  useEffect(() => {
    // When userData changes, update the localRole
    if (userData) {
      getUserRoleByEmail(userData.email)
        .then(role => {
          if (role) {
            setLocalRole(role);
          }
        })
        .catch(error => {
          console.log("Error fetching role:", error);
        });
    }
  }, [userData]);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/"><FaHome size={40} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/register"><SiGnuprivacyguard /> Register</Nav.Link>
            <Nav.Link href="/login"><FaSignInAlt /> Login</Nav.Link>
            {userData && (
              <Nav.Link as={Link} to="/list"><FaRegListAlt /> My Resumes</Nav.Link>
            )}
            {localRole === 'admin' && (<Nav.Link href="/all"><FaListUl /> All Resumes</Nav.Link>

            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
};

export default CustomNavbar;
