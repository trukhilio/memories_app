import React, { Component } from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './styles.scss';

export class Image extends Component{
    render(){
        return(
            <img
                src={this.props.src}
                alt="image here"/>
        )
    }
}

export default withStyles(s)(Image);