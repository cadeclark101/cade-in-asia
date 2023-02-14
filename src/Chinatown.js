import React, { Component } from 'react';
import 'jquery';

import './Chinatown.css';

import noodle_stand_image from './img/singapore/chinatown/noodle_stand_vector.svg';
import { ready } from 'jquery';



export default class Chinatown extends Component {
    componentDidMount() {
        let org_width = 677;
        console.log("original width: " + org_width);

        let rendered_width = document.getElementById("noodle-stand-image").clientWidth;
        console.log("rendered width: " + rendered_width);

        let ratio = rendered_width / org_width;
        console.log("ratio: " + ratio);

        let areas = document.getElementsByTagName("area");

        let new_coords = [];

        for (let i = 0; i < areas.length; i++) {
            let coords_split =  areas[i].coords.split(",");
            new_coords.push(coords_split[0])
            new_coords.push(coords_split[1])
            for (let a = 2; a < coords_split.length; a++) {
                new_coords.push(coords_split[a] * ratio);
            }
            areas[i].coords = new_coords;
            console.log(areas[i].coords);
        }
        
    }

    render() {

        return (
            
            <React.Fragment>

                <div id="main-container">

                <img id="noodle-stand-image" src={noodle_stand_image} border="0" width="677" height="510" orgwidth="677" orgheight="510" useMap="#image-maps-2023-02-14-105000" alt="" />
                    <map name="image-maps-2023-02-14-105000" id="ImageMapsCom-image-maps-2023-02-14-105000">
                        <area alt="" title="" href="#" shape="poly" coords="264,116,447,98,430,287,416,286,416,259,411,250,405,257,403,274,371,269,368,279,293,272,293,262,256,257" target="_self"     />
                    </map>
                </div>
            </React.Fragment>
        )
    }
}

