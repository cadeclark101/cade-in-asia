import React, { Component } from 'react';
import './FlagButton.css';

export default class FlagButton extends Component {

  render() {
    return(
        <button class="flag-button" style={{"left": this.props.left_val, "top": this.props.top_val}}> <img class="flag-button-image" src={this.props.flag_location} style={{"width": "100%", "height":"100%"}} alt="" /> </button>
    )
  }

}

