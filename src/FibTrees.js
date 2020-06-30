import React, { Component } from 'react';

class FibTrees extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    s = (sketch) => {

        let x = 100;
        let y = 100;

        sketch.setup = () => {
            sketch.createCanvas(200, 200);
        };

        sketch.draw = () => {
            sketch.background(0);
            sketch.fill(255);
            sketch.rect(x, y, 50, 50);
        };
    }

    componentDidMount() {
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    render() {
        return (
            <div ref={this.myRef}>

            </div>
        );
    }
}

export default FibTrees;