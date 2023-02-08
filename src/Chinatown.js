import React, { Component } from 'react';

import './Chinatown.css';
import noodle_stand from '././img/singapore/chinatown/noodle_stand_vector.svg';

export default class Chinatown extends Component {

    render() {
        
    function test() {
        console.log("found!");
    }

        return (
            
            <React.Fragment>
                <div id="main-container">
                    <img src={noodle_stand} usemap="#noodle-stand-map"></img>

                    <map name="noodle-stand-map">
                        <area shape="poly"
                            coords = "74,0,113,29,98,72,52,72,38,27"
                            target= "_self"
                            onMouseOver={test()}
                        />
                    </map>
                </div>
            </React.Fragment>
        )
    }
}
