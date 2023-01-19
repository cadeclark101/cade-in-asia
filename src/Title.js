import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {

    render() {
        return(
            <React.Fragment>
                <p id="main-title-text">{this.props.main_title}</p>
                <p id="sub-title-text">{this.props.sub_title}</p>
            </React.Fragment>
        )
        }
}