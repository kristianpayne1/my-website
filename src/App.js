import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Welcome from "./Welcome.js";
import Home from "./Home.js";
import { HashRouter, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap/';
import ContactMe from './ContactMe.js';

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="color-nav" id="navbar">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" onSelect={(selectedKey) => window.scroll({ top: (document.getElementById(selectedKey).offsetTop - document.getElementById("navbar").offsetHeight), behavior: "smooth" })}>
            <Nav.Link href="" eventKey="home">Home</Nav.Link>
            <Nav.Link href="" eventKey="skills">Skills</Nav.Link>
            <Nav.Link href="" eventKey="projects">Projects</Nav.Link>
            <Nav.Link href="" eventKey="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <HashRouter basename='/'>
        <div className="App">
          <Route excat path="/" component={Home} />
        </div>
      </HashRouter>
      <ContactMe />
    </div>
  );
}

export default App;
