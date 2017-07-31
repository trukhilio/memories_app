import React, { Component } from 'react';

export default class Image extends Component{
    render(){
        return(
            <img
                className={this.props.className}
                src={this.props.src}
                alt="image here"/>
        )
    }
}