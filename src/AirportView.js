import React, { Component } from 'react';

import './AirportView.css';

import uk_flag from './img/uk_flag.png';
import abu_dhabi_flag from './img/abu_dhabi_flag.png';
import singapore_flag from './img/singapore/singapore_flag.png';

export default class AirportView extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div id="airport-view-container">
                    <div id="title-container">
                        <h1 className='left'>LONDON <img src={uk_flag}></img></h1>
                        <h1 className='center'>ABU DHABI <img src={abu_dhabi_flag}></img></h1>
                        <h1 className='right'>SINGAPORE <img src={singapore_flag}></img></h1>
                    </div>

                    <div id="body-container">
                        <div id="box-one">
                            <h2>PRE-DEPARTURE AND PLANNING</h2>
                            <span className="hidden-text">
                                <p>A trip that had been on my mind since my first year at the University of Surrey demanded enough planning to make any persons head spin.</p> 
                                <p>A considerable amount of prerequisites are often overlooked by would-be travellers and social media influencers. </p>
                                <p>The ability to be <span style={{color: "turquoise"}}>flexible and decisive</span> helped me secure the best possible price for my flight while still maintaining realistic time goals.</p>
                                <p>A quick sum up of said prerequisites (for entry to Singapore) includes: <span style={{color: "red"}}>COVID-19 documentation, recommended vaccinations, pre-booked residence, and approved airrval card.</span></p>
                            </span>
                        </div>
                        <div id="box-two">
                            <h2>THE SMELLIEST FLIGHT</h2>
                            <span className="hidden-text">
                                <p>18 hours is a long time, especially when you are up twelve thousand meters in the air inside a metal can.</p>
                                <p>It should come at no surprise that if you are planning to come halfway around the world that your initial flight will be long. Luckily, you can take measures to make this experience somewhat bearable without breaking the bank:</p>
                                <p><span style={{fontSize: "30px", color: "green"}}>FLY WITH A MIDDLE EASTERN AIRLINE.</span></p>
                                <p>I flew with <span style={{ color: "gold"}}>Etihad Airways</span> for both legs of the journey and both were bearable compared to the atrocities I would have faced on any of the European airlines.</p>
                                <p>When booking a flight, use multiple cheap-flight websites such as <span style={{color: "red"}}>Skyscanner, Kayak and my personal favourite: Google Flights.</span></p>
                            </span>
                        </div>
                        <div id="box-three">
                            <h2>THE GREATEST AIRPORT IN THE WORLD</h2>
                            <span className="hidden-text">
                                <p>Singapore's Changi Airport is considered one of the best airports in the world... for those who depart from it.</p>
                                <p>Please enjoy this list of features and amenities that I did not get to enjoy:</p>
                                <ul>
                                    <li>Butterfly garden,</li>
                                    <li>Four-story slide,</li>
                                    <li>Cinema,</li>
                                    <li>Swimming pool,</li>
                                    <li>Art installations,</li>
                                    <li>Indoor jungle,</li>
                                    <li>Playground,</li>
                                    <li>Mirror maze.</li>
                                </ul>
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
