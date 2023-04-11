import React, { useState } from 'react';

import './Vietnam.css';



function Vietnam() {

    function openNav() {
        document.getElementById("vietnam-side-nav-id").style.width = "11%";
    }

    function closeNav() {
        document.getElementById("vietnam-side-nav-id").style.width = "0%";
    }

    return (
        <div className="vietnam-container" id="vietnam-container-id">
            <div id="vietnam-side-nav-id" className="vietnam-side-nav">
                <a href="#">Ho-Chi-Minh</a>
                <a href="#">Da Lat</a>
                <a href="#">Da Nang</a>
                <a href="#">Hoi An</a>
                <a href="#">Hue</a>
                <a href="#">Hanoi</a>
                <div className="vietnam-side-nav-close-btn-container">
                    <a href="#" onClick={closeNav} id="vietnam-side-nav-open-btn">CLOSE MENU</a>
                </div>
            </div>
            <div className="vietnam-side-nav-open-btn-container" id="vietnam-side-nav-open-btn-id">
                <a href="javascript:void(0)" onClick={openNav} id="vietnam-side-nav-open-btn">OPEN MENU</a>
            </div>
            <div className="vietnam-title-container">
                <h1 id="vietnam-title-text">VIETNAM</h1>
            </div>
            <div className="body-container">

            </div>
        </div>
    )
}

export default Vietnam;