import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Welcome from "./Welcome.js";
import Home from "./Home.js";
import { HashRouter, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap/';
import ContactMe from './ContactMe.js';
import FractalTree from './FractalTree.js';

class App extends Component {
  onSelect = (selectedKey) => {
    console.log(window.location.hash)
    if (window.location.hash !== '#/') {
      window.location.hash = "#/";
      let timer = setInterval(function () {
        if (!!document.getElementById(selectedKey)) {
          window.scroll({ top: (document.getElementById(selectedKey).offsetTop - document.getElementById("navbar").offsetHeight), behavior: "smooth" });
          clearInterval(timer);
        }
      }, 1000)
    } else {
      window.scroll({ top: (document.getElementById(selectedKey).offsetTop - document.getElementById("navbar").offsetHeight), behavior: "smooth" });
    }
  }

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="color-nav" id="navbar">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" onSelect={(selectedKey) => this.onSelect(selectedKey)}>
              <Nav.Link href="" eventKey="home">Home</Nav.Link>
              <Nav.Link href="" eventKey="skills">Skills</Nav.Link>
              <Nav.Link href="" eventKey="projects">Projects</Nav.Link>
              <Nav.Link href="" eventKey="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <HashRouter basename='/'>
          <div className="App">
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/fractaltree" component={FractalTree} />
            </div>
          </div>
        </HashRouter>
        <ContactMe />
      </div>
    );
  }
}

export default App;
