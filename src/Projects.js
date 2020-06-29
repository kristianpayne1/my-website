import React, { Component } from 'react';
import { Fade } from 'react-reveal/';
import { Card } from 'react-bootstrap/';

class Projects extends Component {
    render() {
        return (
            <div className="projects-home" id="projects">
                <Fade bottom>
                    <h1>Projects</h1>
                    <p>Here is a few of my favorite projects I have worked on.</p>
                    <Fade bottom cascade>
                        <div className="project-deck">
                            <Card className="project-card">
                                <Card.Img variant="top" src={require('./img/cablink.png')} />
                                <Card.Body>
                                    <Card.Title>CabLink</Card.Title>
                                    <Card.Text>
                                        My final year CS project at university. A local taxi firm price comparison web application focused on the Canterbury area. Made in React with Express backend. Utilises Google's Maps API for real time traffic and routing. 
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Github repo: <a href="https://github.com/kristianpayne1/CabLink" target="_blank" rel="noopener noreferrer">Here</a></small>
                                </Card.Footer>
                            </Card>
                            <Card className="project-card">
                                <Card.Img variant="top" src={require('./img/ks-game.png')} />
                                <Card.Body>
                                    <Card.Title>Kent Snow Mobile Game</Card.Title>
                                    <Card.Text>
                                        My first endeavour into mobile game development. Made in Unity, written C#. It is an endless runner skiing game challenging players to get as far as possible while avoiding obstacles and collecting coins.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Github repo: <a href="https://github.com/kristianpayne1/KS-Ski-Game" target="_blank" rel="noopener noreferrer">Here</a></small>
                                </Card.Footer>
                            </Card>
                            <Card className="project-card">
                                <Card.Img variant="top" src={require('./img/spotify-companion.png')} />
                                <Card.Body>
                                    <Card.Title>MBed Spotify Companion</Card.Title>
                                    <Card.Text>
                                        Written in Java, utilising Spotify's API, this application converts an MBed device into a spotify companion which can control a user's music.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Github repo: <a href="https://github.com/kristianpayne1/spotify-companion" target="_blank" rel="noopener noreferrer">Here</a></small>
                                </Card.Footer>
                            </Card>
                            <Card className="project-card">
                                <Card.Img variant="top" src={require('./img/woking-swimming.png')} />
                                <Card.Body>
                                    <Card.Title>Woking Swimming Club Manager</Card.Title>
                                    <Card.Text>
                                        My A-level CS project. Made using Java with JavaFX UI. This application was for my local swimming club to help swimmers keep track of their lap times, upcoming events and training sessions.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Github repo: <a href="https://github.com/kristianpayne1/Woking-Swimming-Club-Manager" target="_blank" rel="noopener noreferrer">Here</a></small>
                                </Card.Footer>
                            </Card>
                        </div>
                    </Fade>
                </Fade>
            </div>
        );
    }
}

export default Projects;