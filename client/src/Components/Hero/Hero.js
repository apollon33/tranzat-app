import React from 'react'

import MainNavigation from '../Navigation/MainNavigation';
import ExchangeForm from '../../util/ExchangeForm';
import HeroFeatures from './HeroFeatures';
import Fade from 'react-reveal/Fade';

import './Hero.css';


const Hero = () =>{

    return(
        <div className="hero">
            <section className="hero-wrapper">
                <div className="hero-main">
                    <div className="container">
                        {/* Main Navigation Starts */}
                       
                        {/* Main Navigation End */}

                        <div className="hero-box">
                        <Fade left>   
                        <div className="hero-content">
                        <h1>The trusted experts in <br/> international money transfer</h1>
                        <div className="hero-list">
                        <ul className="hero-list__1">
                            <li>Consistently competitive rates</li>
                            <li>Secure FCA-authorised transfers</li>
                            <li>Realtime exchange</li>
                        </ul>
                        <ul className="hero-list__2">
                            <li>24/7 online money transfer</li>
                            <li>No hidden fees or charges</li>
                        </ul>
                        </div>
                        <button className="btn-start">Get started</button>
                        </div>
                        </Fade> 
                        
                        <ExchangeForm />
                    
                        </div>
                        
                    </div>
                </div>
                <div className="hero-white">
                   
                </div>
            </section>

            <HeroFeatures />
        </div>
    )
}

export default Hero;