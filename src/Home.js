import React, { Component } from 'react';
import { Image } from 'react-bootstrap/';
import { Fade } from 'react-reveal/';
import Skills from './Skills.js';
import Projects from './Projects.js';

class Home extends Component {
    render() {
        return (
            <div>
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
        );
    }
}

export default Home;