import React from 'react';
import Dither from './Dither';
import TargetCursor from './TargetCursor';
import MainContent from './portfolio/MainContent';
import PortfolioGrid from './PortfolioGrid';

const Portfolio: React.FC = () => {
    return (
        <div className="hero min-h-screen relative">
            <div className="absolute inset-0 z-0">
                <Dither
                    waveColor={[0.5, 0.5, 0.5]}
                    disableAnimation={false}
                    enableMouseInteraction={true}
                    mouseRadius={0.3}
                    colorNum={4}
                    waveAmplitude={0.3}
                    waveFrequency={3}
                    waveSpeed={0.05}
                />
            </div>
            <div className="hero-content text-center relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8">
                        My Portfolio
                    </h1>
                    <MainContent />
                    <div className="mt-12"></div>
                    <PortfolioGrid />

                </div>
            </div>
            <TargetCursor />
        </div>
    );
};

export default Portfolio;