import React, { Component } from 'react';
import './Singapore.css';

export default class Singapore extends Component {

    render() {
        return(
            <React.Fragment>
                <div id="placeholder-title-container">
                    <h2 id="placeholder-text-title">Fear and Loathing.</h2>
                </div>

                <div id="placeholder-text-container">
                    <div id="placeholder-text-container-left"> 
                        <p class="placeholder-main-text">Singapore. A global financial center boasting some of the cleanest streets in the world. Akin to Dubai, it feels like a playground for the rich; featuring a multitude of 6 star hotels complemented by MICHELIN Star resturants, sprawling modern shopping malls and towering skyscrapers boasting lavish skybars.</p>
                    </div>
                    <div id="placeholder-text-container-right"> 
                        <p class="placeholder-main-text">Despite this urban paradise - a combination of jet lag, home sickness and bad airplane food made me less than willing to explore. Knowing little about where I was or what I was going to do I set about finding my "hotel". <br /> <br /><span style={{"background-color": "#342a29"}}>This is where my journey began.</span> </p>
                    </div>
                </div>
            </React.Fragment>
        )
        }
}