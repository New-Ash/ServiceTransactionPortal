import React, { Component } from 'react'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; position : fixed; top:0; right:0; left:0; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #ff9900;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #ff9900;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;


export class NavigationBarprof extends Component {
  render() {
    return (
      <div>
         <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/ProfHome">User DashBoard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/ProfHome">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/ProfAbout">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/ProfProfile">My Profile</Nav.Link></Nav.Item>
          {/* <Nav.Item><Nav.Link href="/history">History</Nav.Link></Nav.Item> */}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
        
      </div>
    )
  }
}

export default NavigationBarprof
 
