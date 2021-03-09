import { Grid,Button } from '@material-ui/core';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from './Group 1329.png';
import "./Header.css";
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <Grid container>
      <Grid item md={12} xs={12} sm={12}>
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="" className="logo_wrapper">
            <Link to="/">
             <img src={logo} alt=""/>
            </Link>

         </Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav">
              <Link to="/" className="link">
              <Nav.Link href="/">Home</Nav.Link>
              </Link>
              <Link to="*" className="link">
              <Nav.Link href="*">Donetion</Nav.Link>
              </Link>
              <Link to="/my-event" className="link">
                <Nav.Link href="/my-event">Events</Nav.Link>
              </Link>
              <Link to="*" className="link">
              <Nav.Link href="*">Blog</Nav.Link>
              </Link>
              <Link className="reg_btn" to="/register-form">
                <Nav.Link href="/register-form" className="register_btn">Register</Nav.Link>
              </Link>
              <Link className="ad_btn" to="/admin">
              <Nav.Link href="/admin" className="admin_btn">Admin</Nav.Link>
              </Link>
               
         </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <div className="text-center py-5">
          <h2 className="py-2">I GROW BY HELPING PEOPLE IN NEED </h2>
          <input type="text" placeholder="Search here"/>
          <Button variant="contained" color="primary">
             Search
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;