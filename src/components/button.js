import React, { Component } from 'react';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../styles/button.scss';

export class Button extends Component{
    render(){
        return(
            <button
                className={s.btncolor}
                type="button"
                onClick={this.props.onClick}>
                    {this.props.title}
            </button>
        )
    }
}

export default withStyles(s)(Button);