import React from 'react';
import Fade from 'react-reveal/Fade';

import './HeroFeatures.css';

// Features Icons
import rates from '../../Assets/icons/saved.svg';
import time from '../../Assets/icons/tools.svg';
import giftbox from '../../Assets/icons/gift-boxes.svg';
import globe from '../../Assets/icons/globe.svg';
import close from '../../Assets/icons/closed.svg';
import circling from '../../Assets/icons/circling-arrows.svg'; 


const HeroFeatures = () => {
    return (
        <React.Fragment>
           <Fade bottom> 
        <section className="hero-features">
                <div className="container">
                    <div className="features-row">
                        <div className="feature-col">
                            <img src={rates} alt="icons"/> <span className="circle-bg"></span>
                            <p>Bank-beating <br/> exchange rate</p>
                        </div>
                        <div className="feature-col">
                            <img src={time} alt="icons"/> <span className="circle-bg"></span>
                            <p>Same-day transfers on <br/> selected currencies</p>
                        </div>
                        <div className="feature-col">
                            <img src={giftbox} alt="icons" /> <span className="circle-bg"> </span>
                            <p>No transfer fees for regular <br/> and phone payments</p>
                        </div>
                    </div>

                    <div className="features-row">
                        <div className="feature-col">
                            <img src={globe} alt="icons"/> <span className="circle-bg"></span>
                            <p>send money to over 50<br/> countries worldwide</p>
                        </div>
                        <div className="feature-col">
                            <img src={close} alt="icons"/> <span className="circle-bg"></span>
                            <p>Secure payments <br/> FCA authorised</p>
                        </div>
                        <div className="feature-col">
                            <img src={circling} alt="icons" /> <span className="circle-bg"></span>
                            <p>Regular payments<br/> facility</p>
                        </div>
                    </div>
                </div>
            </section>
            </Fade>
    </React.Fragment>
    )
    
}

export default HeroFeatures;