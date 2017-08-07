import React, { Component } from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Image from '../image/index';
import s from './styles.scss'

class Slide extends Component{
    render(){
        const current = this.props.sourcePath[this.props.current];
        return <Image key={current} className={s.slide} src={`${current}`} />
    }
};

export default withStyles(s)(Slide)
