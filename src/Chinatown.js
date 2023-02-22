import React, { Component } from 'react';
import 'jquery';

import './Chinatown.css';


import noodle_stand_image from './img/singapore/chinatown/noodle_stand_vector.svg';
import Title from './Title';



export default class Chinatown extends Component {

    render() {
        
        return (
            
            <React.Fragment>

                <div id="main-container">
                    <div id="noodle-stand-image-container">
                        <img id="noodle-stand-image" src={noodle_stand_image} border="0" orgwidth="650" orgheight="510" useMap="#image-maps-2023-02-14-105000" alt="" />
                            <map name="image-maps-2023-02-14-105000" id="ImageMapsCom-image-maps-2023-02-14-105000">
                                <area alt="" className="test" href="#1" title="1" shape="poly" style={{outline:"1px solid black"}} coords="256,114,429,96,414,276,399,273,396,242,390,249,387,266,376,264,352,258,354,269,282,264,283,251,246,248" target="_self" />
                                <area alt="" href="#2" title="2" shape="poly" style={{outline:"1px solid red"}} coords="245,48,489,0,540,1,534,86,243,112" target="_self" />
                                <area alt="" href="#3" title="3"  shape="poly" style={{outline:"1px solid green"}} coords="429,97,531,88,512,286,412,278"  target="_self" />
                                <area alt="" href="#4" title="4" shape="poly" style={{outline:"1px solid white"}} coords="216,112,208,248,244,246,254,118,230,120" target="_self" />
                            </map>
                    </div>
                    <div id="chinatown-title-container">
                        <p className="placeholder-text-title">WESTERN, MALAYSIAN, CHINESE, INDIAN, SINGAPOREAN</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    resizeMaps = () => {
        var areas = document.getElementsByTagName("area");

        areas[0].coords = "256,114,429,96,414,276,399,273,396,242,390,249,387,266,376,264,352,258,354,269,282,264,283,251,246,248";
        areas[1].coords = "245,48,489,0,540,1,534,86,243,112";
        areas[2].coords = "429,97,531,88,512,286,412,278";
        areas[3].coords = "216,112,208,248,244,246,254,118,230,120";

        var org_width = 650;
        var org_height = 510;

        var rendered_width = document.getElementById("noodle-stand-image").clientWidth;
        var rendered_height = document.getElementById("noodle-stand-image").clientHeight;

        var widthRatio = rendered_width / org_width;
        var heightRatio = rendered_height / org_height;

        for (var i = 0; i < areas.length; i++) {
            var new_coords = [];
            var coords_split =  areas[i].coords.split(",");
            for (var a = 0; a < coords_split.length; a += 2) {
                new_coords.push(coords_split[a] * widthRatio);
                new_coords.push(coords_split[a + 1] * heightRatio);
            }
            coords_split = [];
            areas[i].coords = new_coords;
            console.log(areas[i].coords);
        }
    }

    componentDidMount() {
        this.resizeMaps()
        window.addEventListener('resize', this.resizeMaps);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.resizeMaps);
      }

}

