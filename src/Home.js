import React, { Component } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap/';
import { Fade } from 'react-reveal/';
import Skills from './Skills.js';

class Home extends Component {
    render() {
        return (
            <div>
                <header>
                    <Fade top>
                        <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="color-nav ">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="">Home</Nav.Link>
                                    <Nav.Link href="">Skills</Nav.Link>
                                    <Nav.Link href="">Projects</Nav.Link>
                                    <Nav.Link href="">Blog</Nav.Link>
                                    <Nav.Link href="">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Fade>
                </header>
                <div className="content">
                    <div className="home" onScroll={this.handleScroll}>
                        <Fade>
                            <Image src={require('./img/me.jpg')} />
                            <h1 className="home-title">{"I'm a "}<span style={{ color: "#98c379" }}>{"full stack"}</span> <span style={{ color: "#61afef" }}>{"web developer"}</span></h1>
                        </Fade>
                        <Fade bottom>
                            <p className="aboutme-para">Born in Finland, raised in the UK. I am a graduate from the University of Kent with a passion for development.</p>
                        </Fade>
                    </div>
                    <Skills />
                </div>
            </div>
        );
    }
}

export default Home;