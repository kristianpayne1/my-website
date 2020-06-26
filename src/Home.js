import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap/';
import { Fade } from 'react-reveal/';
import Skills from './Skills.js';
import Projects from './Projects.js';
import ContactMe from './ContactMe.js';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="content">
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
                    <div className="home" onScroll={this.handleScroll} id="home">
                        <Fade>
                            <Image src={require('./img/me.jpg')} />
                            <h1 className="home-title">{"I'm a "}<span style={{ color: "#98c379" }}>{"full stack"}</span> <span style={{ color: "#61afef" }}>{"\nweb developer"}</span></h1>
                        </Fade>
                        <Fade bottom>
                            <p className="aboutme-para">Born in Finland, raised in the UK. I am a graduate from the University of Kent with a passion for development.</p>
                        </Fade>
                    </div>
                    <Skills />
                    <Projects />
                </div>
                <ContactMe />
            </div>
        );
    }
}

export default Home;