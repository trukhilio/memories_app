import React, { Component } from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Image from '../image/index';
import s from './styles.scss'

const Slide = (props) => {
    const current = props.sourcePath[props.current];
    return <Image className={s.slide} src={`${current}`} />
};

export default withStyles(s)(Slide)
