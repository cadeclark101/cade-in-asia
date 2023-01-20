import React, { Component } from 'react';
import './IconButton.css';

export default class IconButton extends Component {

    render() {
        return(
            <React.Fragment>
                <button class="icon-button" style={{"left": this.props.left_val, "top": this.props.top_val}}> <img class="icon-button-image" src={this.props.icon_location} style={{"width": "100%", "height":"100%"}} alt="" /> </button>
            </React.Fragment>
        )
        }
}