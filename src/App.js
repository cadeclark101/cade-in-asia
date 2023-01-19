import React from 'react';


import sea_map from './img/sea.png';
import singapore_flag from './img/singapore_flag.png';
import malaysia_flag from './img/malaysia_flag.png';
import thailand_flag from './img/thailand_flag.png';
import cambodia_flag from './img/cambodia_flag.png';
import vietnam_flag from './img/vietnam_flag.png';
import singapore_map from './img/singapore_map.png';


import './App.css';

import Map from './Map';
import FlagButton from './FlagButton';
import Title from './Title';
import Intro from './Intro';
import Singapore from './Singapore';


function App() {
  return (
    <div className="container">
      <div id="title-section-container">
        <div id="sea-map-image-container">
          <Map map_location={sea_map} map_image_height={"100%"} map_image_width={"auto"} image_alt={"map of south east asia"}/>
        </div>
        <div id="title-container">
          <Title main_title={"Cade In Asia:"} sub_title={"A 3 Month Excursion Exploring the Heart of South East Asia."}/>
          <FlagButton flag_location={singapore_flag} />
          <FlagButton flag_location={malaysia_flag}  />
          <FlagButton flag_location={thailand_flag}  />
          <FlagButton flag_location={cambodia_flag}  />
          <FlagButton flag_location={vietnam_flag}  />
        </div>
      </div>

      <div id="intro-section-container">
        <div id="intro-text-container">
          <Intro id="intro" />
        </div>
      </div>
      
      <div id="singapore-section-container">

        <div id="singapore-map-image-container">
          <Map map_location={singapore_map} map_image_height={"500px"} map_image_width={"auto"} image_alt={"map of singapore"}/>
        </div>

        <div id="singapore-title-container">
          <Title main_title={"Singapore."} sub_title={"Click an above location to see more."}/>
        </div>

        <div id="singapore-body-area">
          <Singapore />
        </div>
      </div>
    </div>
  )
}

export default App;
