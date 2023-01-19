import React, { Component } from 'react';


export default class Map extends Component {

  render() {
    return(
        <img src={this.props.map_location} style={{ "width": this.props.map_image_width, "height": this.props.map_image_height }} alt={this.props.image_alt} />
    )
  }

}