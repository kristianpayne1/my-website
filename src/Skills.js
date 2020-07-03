import React, { Component } from 'react';
import { Fade } from 'react-reveal/';
import SkillBar from './SkillBar.js';

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
                            <SkillBar target={80}/>
                        </div>
                        <div className="col-sm">
                            <h4>React</h4>
                            <SkillBar target={75}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <h4>Vue</h4>
                            <SkillBar target={60}/>
                        </div>
                        <div className="col-sm">
                            <h4>PHP</h4>
                            <SkillBar target={65}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <h4>SQL</h4>
                            <SkillBar target={80}/>
                        </div>
                        <div className="col-sm">
                            <h4>Node</h4>
                            <SkillBar target={70}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm">
                            <h4>Java</h4>
                            <SkillBar target={90}/>
                        </div>
                        <div className="col">
                            <h4>Python</h4>
                            <SkillBar target={50}/>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Skills;