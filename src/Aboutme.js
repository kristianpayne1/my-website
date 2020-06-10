import React, { Component } from 'react';
import { Fade } from 'react-reveal/';
import './App.css';

class Aboutme extends Component {

    render() {
        return (
            <div>
                <Fade bottom>
                    <h1>About me</h1>
                </Fade>
                <Fade bottom>
                    <p>Born in Finland, raised in the UK. I am a graduate from the University of Kent with a passion for development.</p>
                </Fade>
            </div>
        );
    }
}

export default Aboutme;
