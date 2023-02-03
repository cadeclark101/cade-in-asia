import React, { Component } from 'react';
import $ from 'jquery';

import './TreeTopWalk.css';

export default class TreeTopWalk extends Component {

    render() {

        let currentSlide = 0;

        function getSlides() {
            var slides = $("#slides-container-li").children();
            return slides;
        }

        function clickNext() {
        var slides = getSlides();
        console.log(slides);
        if (currentSlide >= slides.length - 1) {
            currentSlide = -1;
        }
        [...slides].forEach(slide => slide.style.display = 'none')
        slides[++currentSlide].style.display = "inline"
        ;
        }

        function clickPrevious() {
            var slides = getSlides();
            if (currentSlide <= 0) {
            currentSlide = slides.length;
        }
        [...slides].forEach(slide => slide.style.display = 'none')
        slides[--currentSlide].style.display = "inline";
        }

        return(
            <React.Fragment>
                    <div id="tree-top-walk-carousel">
                        <li id="slides-container-li">
                            <div className="slide" id="slide-1">
                                <div id="tree-top-walk-info-box">
                                    <span>The Tree Top Walk</span>
                                    <p>As part of the wider Central Catchment Nature Reserve, the Tree Top Walk is a suspension bridge near the MacRitchie Resevoir.</p>
                                    <p>With a round trip walking time of 3-5 hours (~10km) - for a jet lagged traveller this would prove near-fatal.</p>
                                    <p>Please prepare yourself for the upcoming Master-Class photography bought to you by Cerys Murray and her pink Casio camera.</p>
                                </div>
                            </div>
                            <div className="slide" id="slide-2"></div>
                            <div className="slide" id="slide-3"></div>
                            <div className="slide" id="slide-4"></div>
                            <div className="slide" id="slide-5"></div>
                            <div className="slide" id="slide-6"></div>
                            <div className="slide" id="slide-7"></div>
                        </li>
                        <button className="control-button arrow arrow-right" id="next-button" onClick={clickNext}></button>
                        <button className="control-button arrow arrow-left" id="previous-button" onClick={clickPrevious}></button>
                    </div>

            </React.Fragment>
        )
        }
}