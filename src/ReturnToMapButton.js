import React, { Component } from 'react';

export default class ReturnToMapButton extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={this.props.onClick}>RETURN TO MAP</button>
            </React.Fragment>
        )
    }
}