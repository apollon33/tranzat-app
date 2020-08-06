import React from 'react';

import Testimonials from '../Testimonials/Testimonials';
import Faqs from '../Faqs/Faqs';

import './CustomBackground.css';

const CustomBackground = () => {
    return(
        <div className="custom-bg">
            <div className="container">
            <Testimonials />
            <Faqs />
            </div>
            
        </div>
    )
};

export default CustomBackground;