import React, { useState } from 'react';

import './Singapore.css';

import Map from './Map';
import Title from './Title';
import IconButton from './IconButton';
import TreeTopWalk from './TreeTopWalk';
import ReturnToMapButton from './ReturnToMapButton';
import AirportView from './AirportView';

import singapore_map from './img/singapore/singapore_map.png';

import plane_arrival_icon from './img/icons/plane_arrival.svg';
import tree_icon from './img/icons/trees.svg';
import torii_icon from './img/icons/torii.svg';
import fountain_icon from './img/icons/fountain.svg';



export default function Singapore() { {

    const [showAirportView, setShowAirportView] = useState(true); 
    const [showTreeTopWalkView, setShowTreeTopWalkView] = useState(true);
    const [showReturnToMapButton, setShowReturnToMapButton] = useState(true);

    const wrapperRef = React.useRef();

    function animateMapRight() {
        var wrapper = wrapperRef.current;
        console.log(wrapper);
        wrapper.classList.toggle('animate-slide-right');
        setShowAirportView(false);
    }

    function animateMapFadeOut() {
        var wrapper = wrapperRef.current;
        wrapper.classList.toggle('fade-out');
        setTimeout(function() {
            setShowTreeTopWalkView(false);
            setShowReturnToMapButton(false);
        }, 500);
    }

    function handleReturnToMap() {
        var wrapper = wrapperRef.current;
        wrapper.classList.toggle('fade-in');
        setTimeout(function() {
            setShowTreeTopWalkView(true);
            setShowReturnToMapButton(true);
        }, 500);
    }

        return(
            <React.Fragment>
                    <div ref={wrapperRef} id="main-default-map-view-container" className="main-default-map-view-container">

                        <div id="singapore-map-image-container">
                            <Map id="singapore-map-image" map_location={singapore_map} image_alt={"map of singapore"} />

                            <div className="icon-container" id="plane-arrival-icon-button-container">
                                <IconButton id="plane-arrival-icon-button" icon_location={plane_arrival_icon} onClick={() => { animateMapRight();}}/>
                            </div>
                            <div className="icon-container" id="tree-icon-button-container">
                                <IconButton id="tree-icon-button" icon_location={tree_icon} onClick={() => { animateMapFadeOut();}}/>
                            </div>
                            <div className="icon-container" id="china-town-icon-button-container">
                                <IconButton id="china-town-icon-button" icon_location={torii_icon} onClick={() => { animateMapFadeOut();}}/>
                            </div>
                            <div className="icon-container" id="gardens-by-bay-icon-button-container">
                                <IconButton id="gardens-by-bay-icon-button" icon_location={fountain_icon} onClick={() => { animateMapFadeOut();}}/>
                            </div>
                        </div>

                        <div id="singapore-title-container">
                            <Title main_title={"Singapore."} sub_title={"Click an above location to see more."} />
                        </div>

                    </div>

                    <div id="airport-main-container">
                        {!showAirportView ? <AirportView /> : null}
                    </div>

                    <div id="tree-top-walk-main-container">
                        {!showTreeTopWalkView ? <TreeTopWalk /> : null}
                        {!showReturnToMapButton ? <ReturnToMapButton onClick={() => { handleReturnToMap();}} /> : null}
                    </div>
                    

            </React.Fragment>
        )
        }
}


