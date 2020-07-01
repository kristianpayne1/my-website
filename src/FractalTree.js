import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap/';
import { Fade } from 'react-reveal/';
import p5 from 'p5';

class FractalTree extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {
        var angle;
        var totalBranch;
        var lRandom;

        var aSlider;
        var bSlider;
        var lSlider;

        var aLabel;
        var bLabel;
        var lLabel;

        var canvasH = p.min(p.min(p.windowHeight * 0.8, 400), p.windowWidth * 0.8);
        var canvasW = p.min(p.min(p.windowWidth * 0.8, 400), p.windowHeight * 0.8);

        p.setup = () => {
            let canvas = p.createCanvas(canvasW, canvasH);
            canvas.parent("sketchHolder");
            aSlider = p.createSlider(0, p.TWO_PI, p.PI / 4, 0.1);
            bSlider = p.createSlider(1, 12, 8, 1);
            lSlider = p.createSlider(0, 0.5, 0, 0.05);

            aSlider.input(p.sliderChanged);
            bSlider.input(p.sliderChanged);
            lSlider.input(p.sliderChanged);

            aLabel = p.createP("Change angle ");
            bLabel = p.createP("Change no. braches ");
            lLabel = p.createP("Change randomness ");

            aSlider.parent("sketchHolder");
            bSlider.parent("sketchHolder");
            lSlider.parent("sketchHolder");

            aSlider.parent(aLabel);
            bSlider.parent(bLabel);
            lSlider.parent(lLabel);

            p.noLoop();
        }

        p.sliderChanged = () => {
            p.redraw();
        }

        p.windowResized = () => {
            canvasH = p.min(p.min(p.windowHeight * 0.8, 400), p.windowWidth * 0.8);
            canvasW = p.min(p.min(p.windowWidth * 0.8, 400), p.windowHeight * 0.8);
            p.resizeCanvas(canvasW, canvasH);
        }

        p.draw = () => {
            angle = aSlider.value();
            totalBranch = bSlider.value();
            lRandom = lSlider.value();

            p.background(51);
            p.stroke(255);
            p.translate(canvasW / 2, p.height);
            p.branch(canvasW / 4, 0, totalBranch + 1);
        }

        p.branch = (len, level, size) => {
            level++;
            size--;
            if (level <= totalBranch) {
                var lenTemp = len;
                var angleTemp = angle;

                if (p.random() <= lRandom) {
                    lenTemp = p.random(len / 2, len);
                }

                p.strokeWeight(size);
                p.line(0, 0, 0, -lenTemp);
                p.translate(0, -lenTemp);
                p.push();
                p.rotate(angleTemp);
                p.branch(lenTemp * 0.67, level, size);
                p.pop();
                p.push();
                p.rotate(-angleTemp);
                p.branch(lenTemp * 0.67, level, size);
                p.pop();
            }
        }
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    onClick = () => {
        window.location.hash = "#/";
    }

    render() {
        return (
            <div className="experiment">
                <Button className="experiment-back-button" onClick={this.onClick}><img src={require("./img/arrow-button.png")} alt="back arrow"/> Back</Button>
                <Container fluid>
                    <Row>
                        <br />
                    </Row>
                    <Row>
                        <Col lg="auto">
                            <div ref={this.myRef} id="sketchHolder" className="sketchHolder"></div>
                            <br />
                        </Col>
                        <Col >
                            <Fade>
                                <h1>Fractal Tree</h1>
                                <br />
                                <p>
                                    To understand what is happening here, you first need to understand what a fractal is. In short, a fractal is a never-ending pattern. What makes fractals so interesting is that they can create incredibly complex shapes from just a small subset of rules. We often find fractals in nature, such as snowflakes, clouds, mountains, fern and trees!
                                <br />
                                    <br />
                                "But how?" you may ask. Well, let's take a look at how fractals can make a pretty convincing tree following a simple process. And that is, for every branch make two smaller branches at the end of it. That's it! Have a play around with the interactive sketch I made. Adjust variables like the angle of the branches, the number of levels to create branches and randomness to make your own unique fractal tree (or broccolli, if you reduce the angle).
                                <br />
                                    <br />
                                For this example, I capped the number of levels to create branches to 12. That's a total of <span style={{ "font-weight": "bold" }}>4095</span> branches! The only reason for this is beyond that the sketch starts to struggle. Ideally, it would go be an infinite number of levels for the most detailed tree ever!
                            </p>
                            </Fade>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default FractalTree;