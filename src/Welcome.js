import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './App.css';

class Welcome extends Component {
    state = {
        welcomeText: "",
        message: "Hello! I'm Kristian Payne. \n Welcome to my site.",
        hideButton: true,
        isClicked: false,
        redirect: false,
    }

    welcomeAnimation = () => {
        let index = 0;
        let self = this;
        setTimeout(function () {
            setInterval(function () {
                if (index < self.state.message.length) {
                    let text = self.state.welcomeText + self.state.message.charAt(index);
                    self.setState({ welcomeText: text })
                    index++;
                } else {
                    self.setState({ hideButton: false });
                }
            }, 90);
        }, 1500);
    }

    componentDidMount() {
        this.welcomeAnimation();
    }

    onClick = () => {
        this.setState({isClicked: true});
        let self = this;
        setTimeout(function () {
            self.setState({redirect: true});
        }, 1000);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={'/home'} />
        }
        let showHeader = this.state.isClicked === true ? "fade-out" : "";
        let buttonClass = this.state.isClicked === true ? "arrow-button fade-out" : "arrow-button fade-in";
        let showButton = this.state.hideButton === false ?
            <input type="image" src={require('./img/arrow-button.png')} alt="arrow" className={buttonClass} onClick={this.onClick}/> : <br />;
        return (
            <div className="App-header">
                <h1 className={showHeader}>{this.state.welcomeText}<span className="blinking">_</span></h1>
                {showButton}
            </div>
        );
    }
}

export default Welcome;