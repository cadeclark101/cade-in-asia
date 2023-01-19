import React from 'react';

import { Link, animateScroll as scroll } from "react-scroll";

import singapore_flag from './img/singapore_flag.png';
import malaysia_flag from './img/malaysia_flag.png';
import thailand_flag from './img/thailand_flag.png';
import cambodia_flag from './img/cambodia_flag.png';
import vietnam_flag from './img/vietnam_flag.png';


import './App.css';

import Map from './Map';
import FlagButton from './FlagButton';
import Title from './Title';
import Intro from './Intro';


function App() {
  return (
    <div className="container">
      <div id="first-page-container">
        <div id="image-container">
          <Map />
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

      <div id="intro-container">
        <br></br>
        <Intro id="intro" />
      </div>
      
      <div id="malaysia-section-container">
        
      </div>
    </div>
  )
}

export default App;
