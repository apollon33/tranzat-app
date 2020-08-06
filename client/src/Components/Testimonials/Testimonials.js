import React from 'react';
import Slide from 'react-reveal/Slide';

import './Testimonials.css';

import testiImg1 from '../../Assets/images/testi1.jpg';

const Testimonials = () =>{
    return(
        <div className="testimonials">
            <div className="testimonials-row">
                <div className="testimonials-header">
                 <div className="testimonials-header__line"></div>   
                <h2>Receive money with zero fees.</h2>
                <p>Get your own UK, Eurozone, Australian, New Zealand, and US bank details for free in minutes — without a 
                    local address. Use them to get paid or withdraw money from platforms like Amazon for free.
                Hold that money in your account for future payments or move it to your bank.</p>
                </div>
                
                <div className="testimonials-box">
                    <Slide left>
                    <div className="testimonials-img__wrapper">   
                    <img className="testimonials-img" src={testiImg1}  />
                    </div>
                    </Slide>
                    <Slide right>
                    <div className="testimonials-txt">
                       <p>"Tranzact is the best fintech platform to do transaction globally"</p> 
                       <p className="testimonials-name">Nicky Ibe</p>
                       <p className="testimonials-role">CEO Haltway</p>
                       {/* <div className="slide-controller">
                        <i className="fas fa-angle-left"></i>
                        <i className="fas fa-angle-right"></i>
                    </div> */}
                    </div>
                    </Slide>
                </div>
            </div> 
        </div>
    )
};

export default Testimonials;