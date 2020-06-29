import React, { Component } from 'react';
import { Fade } from 'react-reveal/';
import { Jumbotron } from 'react-bootstrap/';

class ContactMe extends Component {

    render() {
        return (
            <Jumbotron id="contact">
                <div className="contactme-home">
                    <Fade bottom>
                        <h1>Contact me</h1>
                        <p>
                            Feel free to reach out to me about anything!
                    </p>
                        <ul>
                            <li><a href="https://www.linkedin.com/in/kristian-payne-015698166/" class="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a></li>
                            <li><a href="https://twitter.com/KriswithaK76" class="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a></li>
                            <li><a href="https://github.com/kristianpayne1" class="fa fa-github" target="_blank" rel="noopener noreferrer"></a></li>
                            <li><a href="mailto:kristian.j.payne@gmail.com" class="fa fa-envelope"></a></li>
                        </ul>
                    </Fade>
                </div>
            </Jumbotron >
        );
    }
}

export default ContactMe;