import React, { Component } from 'react';
import './Title.css';

export default class Title extends Component {

    render() {
        return(
            <React.Fragment>
                <p className="main-title-text">{this.props.main_title}</p>
                <p className="sub-title-text">{this.props.sub_title}</p>
            </React.Fragment>
        )
        }
}