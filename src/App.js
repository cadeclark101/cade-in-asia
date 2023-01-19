import React from 'react';

import singapore_flag from './img/singapore_flag.png';
import malaysia_flag from './img/malaysia_flag.png';
import thailand_flag from './img/thailand_flag.png';


import './App.css';

import Map from './Map';
import FlagButton from './FlagButton';
import Title from './Title';


function App() {
  return (
    <div className="container">
      <div id="image-container">
        <Map />
        <FlagButton flag_location={singapore_flag} left_val={"30%"} top_val={"67%"} />
        <FlagButton flag_location={malaysia_flag} left_val={"26%"} top_val={"60%"} />
        <FlagButton flag_location={thailand_flag} left_val={"26%"} top_val={"42%"} />
      </div>
      <div id="title-container">
        <Title main_title={"Cade In Asia:"} sub_title={"A 3 Month Excursion Exploring the Heart of South East Asia."}/>
      </div>
    </div>
  )
}

export default App;
