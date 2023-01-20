import React, { Component } from 'react';

import './Singapore.css';

import Map from './Map';
import Title from './Title';
import IconButton from './IconButton';

import singapore_map from './img/singapore_map.png';
import plane_arrival_icon from './img/plane_arrival.svg';
import arrow_big_right_lines from './img/arrow_big_right_lines.svg'

function defaultMapView() {
    return (
        <React.Fragment>
            <div id="singapore-map-image-container-default-view">
                <Map class="singapore-map-image" map_location={singapore_map} map_image_height={"75%"} map_image_width={"auto"} image_alt={"map of singapore"} />

                <div id="singapore-map-icon-container-default-view">
                <IconButton id="plane-arrival-icon-button" icon_location={plane_arrival_icon} />
                </div>
            </div>

            <div id="singapore-title-container-default-view">
                <Title main_title={"Singapore."} sub_title={"Click an above location to see more."} />
            </div>
        </React.Fragment>
    )
}

function activeMapView(){
    var clicked_button = document.getElementById("plane-arrival-icon-button");
    var singapore_map_image_container_default_view = document.getElementById("singapore-map-image-container-default-view");
    clicked_button.onclick = function(){
        singapore_map.style.visibility = "hidden";
      }
}

function airportView() {
    return (
        <React.Fragment>
            <div id="singapore-airport-view-container">
                <div id="singapore-airport-view-text-container">
                    <Title main_title={"LONDON"} />
                    <Title main_title={"ABU DHABI"} />
                    <Title main_title={"SINGAPORE"} />
                </div>
            </div>
        </React.Fragment>
    )
}


export default class Singapore extends Component {
    render() {
        return(
            defaultMapView()
        )
        }
}