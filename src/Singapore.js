import React, { Component, useState } from 'react';

import './Singapore.css';

import Map from './Map';
import Title from './Title';
import IconButton from './IconButton';

import singapore_map from './img/singapore_map.png';
import plane_arrival_icon from './img/plane_arrival.svg';

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


export default function Singapore() { {

    const [showAirportView, setShowAirportView] = useState(true); 
    const wrapperRef = React.useRef();

    function animateMap() {
        var wrapper = wrapperRef.current;
        console.log(wrapper);
        wrapper.classList.toggle('icon-clicked');
    }

        return(
            <React.Fragment>
                <div ref={wrapperRef} className="main-default-map-view-container">

                    <div id="singapore-map-image-container">
                        <Map className="singapore-map-image" map_location={singapore_map} map_image_height={"75%"} map_image_width={"auto"} image_alt={"map of singapore"} />

                        <div id="singapore-map-icon-container-default-view">
                            <IconButton id="plane-arrival-icon-button" icon_location={plane_arrival_icon} onClick={() => { setShowAirportView(s => !s); animateMap();}}/>
                        </div>
                    </div>

                    <div id="singapore-title-container">
                        <Title main_title={"Singapore."} sub_title={"Click an above location to see more."} />
                    </div>

                </div>
                   
                {!showAirportView ? <AirportView /> : null}
                
            </React.Fragment>
        )
        }
}


