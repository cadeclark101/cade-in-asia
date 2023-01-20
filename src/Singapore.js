import React, { Component } from 'react';

import './Singapore.css';

import Map from './Map';
import Title from './Title';
import IconButton from './IconButton';

import singapore_map from './img/singapore_map.png';
import plane_arrival_icon from './img/plane_arrival.png';

function defaultView() {
    return (
        <React.Fragment>
            <div id="singapore-map-image-container-default-view">
                <Map map_location={singapore_map} map_image_height={"75%"} map_image_width={"auto"} image_alt={"map of singapore"} />

                <div id="singapore-map-icon-container-default-view">
                <IconButton icon_location={plane_arrival_icon} />
                </div>
            </div>

            <div id="singapore-title-container-default-view">
                <Title main_title={"Singapore."} sub_title={"Click an above location to see more."} />
            </div>
        </React.Fragment>
    )
}


export default class Singapore extends Component {
    render() {
        return(
            defaultView()
        )
        }
}