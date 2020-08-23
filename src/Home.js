import React, { Component } from 'react';
import { Image, Container, Row, Col, } from 'react-bootstrap/';
import { Fade } from 'react-reveal/';
import Skills from './Skills.js';
import Projects from './Projects.js';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="thing">
                    <div className="home" id="home">
                        <Container fluid>
                            <Row className="align-items-center">
                                <Col lg="auto" sm={{ order: 12 }}>
                                    <Fade>
                                        <Image src={require('./img/me.jpg')} />
                                    </Fade>
                                </Col>
                                <Col sm={{ order: 1 }}>
                                    <Fade>
                                        <h1 className="home-title">{"I'm a "}<span style={{ color: "#98c379" }}>{"full stack"}</span> <span style={{ color: "#61afef" }}>{"developer"}</span></h1>
                                    </Fade>
                                    <Fade bottom>
                                        <p className="aboutme-para">Born in Finland, raised in the UK. I am a graduate from the University of Kent with a passion for development.</p>
                                    </Fade>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <Skills />
                <Projects />
            </div>
        );
    }
}

export default Home;