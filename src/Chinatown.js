import React, { Component } from 'react';
import ImageMapper from 'react-img-mapper';

import './Chinatown.css';

import noodle_stand_image from './img/singapore/chinatown/noodle_stand_vector.svg';
import map_areas from './map_areas.json';



export default class Chinatown extends Component {

    render() {

        return (
            
            <React.Fragment>
                <div id="main-container">
                    <ImageMapper src={noodle_stand_image} map={MAP} 
                    responsive={props.responsive} // dynamic responsive
                    parentWidth={props.parentWidth} // dynamic parentWidth
                    />
                </div>
            </React.Fragment>
        )
    }
}


