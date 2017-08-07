import React, { Component } from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Slide from '../slide/index';
import s from './styles.scss'

const pathToImages = require.context('../../picture/slider', true);
const srcImage = pathToImages.keys().map(pathToImages);

class Slider extends Component {
    constructor() {
        super();

        this.state = {
            sourcePath: srcImage,
            current: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
    }
    nextSlide() {
        let current = this.state.current;
        let arrLength = this.state.sourcePath.length;
        if (current < arrLength-1) {
            this.setState({current: current + 1})
        }
        else {
            this.setState({current: 0})
        }
        this.timeoutFunc = setTimeout(this.nextSlide, 5000);
    }
    clearTime = () => {
        clearTimeout(this.timeoutFunc);
    };
    componentDidMount() {
        this.nextSlide();
    }
    componentWillUnmount () {
        this.clearTime();
    }

    render(){
        return (
            <div className={s.slider}>
                <Slide
                    sourcePath={this.state.sourcePath}
                    current={this.state.current}
                />
            </div>
        );
    }
}

export default withStyles(s)(Slider);