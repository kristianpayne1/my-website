import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap/';
import { Fade } from 'react-reveal/';

class SkillBar extends Component {
    state = {
        target: this.props.target,
        now: 0,
    }

    onReveal = () => {
        let self = this;
        setTimeout(function(){self.setState({now: self.state.target})}, 500);
    }

    render() {
        return (
            <Fade bottom onReveal={() => {this.onReveal()}}>
                <ProgressBar now={this.state.now} label={`${this.state.now}%`} />
            </Fade>
        );
    }

}

export default SkillBar;