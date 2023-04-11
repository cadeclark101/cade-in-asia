import React, { useState } from 'react';

import singapore_flag from './img/singapore/singapore_flag.png';
import malaysia_flag from './img/malaysia_flag.png';
import thailand_flag from './img/thailand_flag.png';
import cambodia_flag from './img/cambodia_flag.png';
import vietnam_flag from './img/vietnam_flag.png';


import './Main.css';

import FlagButton from './FlagButton';
import Vietnam from './Vietnam';


function Main() {

  
  const [isMainShown, setShowMain] = useState(false);
  const [isVietnamShown, setVietnamIsShown] = useState(true);

  const handleVietnamClick = event => {
    setVietnamIsShown(current => !current);
    setShowMain(current => !current);
  };


  return (
    <div className="container">
      
      {!isMainShown && (
        <>
        <div className="title">
          <h1 id="title-text">Cade In Asia</h1>
          <h3 id="subtitle-text">A 3 Month Backpacking Excursion through the Heart of South East Asia</h3>
        </div><div className="navbar">
            <FlagButton flag_location={singapore_flag} className="flag-button" />
            <FlagButton flag_location={malaysia_flag} className="flag-button" />
            <FlagButton flag_location={thailand_flag} className="flag-button" />
            <FlagButton flag_location={cambodia_flag} className="flag-button" />
            <FlagButton flag_location={vietnam_flag} className="flag-button" onClick={handleVietnamClick} />
          </div>
          </>
      )}

      {!isVietnamShown && (
      <div>
        <Vietnam />
      </div>
    )}

    </div>
    
  )
}

export default Main;