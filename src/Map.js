import React, { Component } from 'react';


export default class Map extends Component {

  render() {
    return(
        <img src={this.props.map_location}  alt={this.props.image_alt} />
    )
  }

}