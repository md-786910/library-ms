import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import StudyEnvironmentSection from './StudyEnvironmentSection';
import StatisticsSection from './StatisticsSection';
import TestimonialsSection from './TestimonialsSection';
import CTASection from './CTASection';
import Footer from '../layout/Footer';

const HomePage = ({ isLoggedIn }) => {
    return (
        <>
            <HeroSection isLoggedIn={isLoggedIn} />
            <FeaturesSection />
            <StudyEnvironmentSection />
            <StatisticsSection />
            <TestimonialsSection />
            <CTASection isLoggedIn={isLoggedIn} />
            <Footer />
        </>
    );
};

export default HomePage;