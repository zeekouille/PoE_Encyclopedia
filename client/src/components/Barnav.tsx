import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles.css'; // Import the external CSS file

export const Barnav = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">PoeEncyclopedia t'as vu la bête de phrase</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            
              <NavDropdown.Item href="/bossprofit">Boss profit</NavDropdown.Item>
          
              
              <NavDropdown.Divider />
               <NavDropdown.Item href="/bow">Crafting ({'later'})</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
