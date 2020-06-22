import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap/';
import { Fade } from 'react-reveal/';

class Skills extends Component {

    render() {
        return (
            <div className="skills-home" id="skills">
                <Fade bottom>
                    <h1>Skills</h1>
                    <p>I strive to explore and learn new and emerging technologies.</p>
                    <div className="row">
                        <div className="col-sm">
                            <h4>HTML/CSS</h4>
                            <ProgressBar now={80} label={`${80}%`} />
                        </div>
                        <div className="col-sm">
                            <h4>React</h4>
                            <ProgressBar now={75} label={`${75}%`} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <h4>Vue</h4>
                            <ProgressBar now={60} label={`${60}%`} />
                        </div>
                        <div className="col-sm">
                            <h4>PHP</h4>
                            <ProgressBar now={65} label={`${65}%`} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <h4>SQL</h4>
                            <ProgressBar now={80} label={`${80}%`} />
                        </div>
                        <div className="col-sm">
                            <h4>Node</h4>
                            <ProgressBar now={70} label={`${70}%`} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <h4>Java</h4>
                            <ProgressBar now={90} label={`${90}%`} />
                        </div>
                        <div className="col">
                            <h4>Python</h4>
                            <ProgressBar now={50} label={`${50}%`} />
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Skills;