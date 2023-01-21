import React, { Component } from 'react';
import { render } from 'react-dom';

import './Singapore.css';

import Map from './Map';
import Title from './Title';
import IconButton from './IconButton';

import singapore_map from './img/singapore_map.png';
import plane_arrival_icon from './img/plane_arrival.svg';
import arrow_big_right_lines from './img/arrow_big_right_lines.svg'

class DefaultMapView extends Component { 
    render() {
        return (
            <React.Fragment>
                <div id="singapore-map-image-container-default-view">
                    <Map className="singapore-map-image" map_location={singapore_map} map_image_height={"75%"} map_image_width={"auto"} image_alt={"map of singapore"} />

                    <div id="singapore-map-icon-container-default-view">
                        <IconButton id="plane-arrival-icon-button" icon_location={plane_arrival_icon} onClick={() => clickIconButton()}/>
                    </div>
                </div>

                <div id="singapore-title-container-default-view">
                    <Title main_title={"Singapore."} sub_title={"Click an above location to see more."} />
                </div>
            </React.Fragment>
        )
    }
}


function clickIconButton(){
    console.log("through");
}

class AirportView extends Component {

    render() {
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
}


export default class Singapore extends Component {
    constructor() {
        super(); 
        this.state = { _show_airport_view: false }
    }

    showAirportView = (bool) => {
        this.setState({
            show_airport_view: bool
        });
      }

    render() {  
        return(
            <React.Fragment>
                <DefaultMapView />
                { this.state.show_airport_view && (<AirportView />) }

            </React.Fragment>
        )
        }
}