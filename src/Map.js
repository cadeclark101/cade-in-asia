import React, { Component } from 'react';
import sea from './img/sea.png';

export default class Map extends Component {

  render() {
    return(
        <img src={sea} style={{ width: "auto", height: "100%" }} alt="sea" id="sea-snapshot"/>
    )
  }

}