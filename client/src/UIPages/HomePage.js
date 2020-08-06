import React from 'react';

import Hero from '../Components/Hero/Hero';
import HowItWorks from '../Components/HowItWorks/HowItWorks';
import UserStatistics from '../Components/UserStatistics/UserStatistics';
import CustomBackground from '../Components/CustomBackground/CustomBackground';
import Footer from '../Components/Footer/Footer';
const HomePage = () => {
    return (
        <React.Fragment>
        <Hero />
        <HowItWorks />
        <UserStatistics />
        <CustomBackground /> 
        <Footer />
        </React.Fragment>
        
    )
}

export default HomePage;