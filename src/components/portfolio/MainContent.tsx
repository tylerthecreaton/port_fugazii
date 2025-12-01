import React, { useState, useEffect, useMemo } from 'react';
import ElectricBorder from '../ElectricBorder';
import CircularText from '../CircularText';

const MainContent: React.FC = () => {
    const words = useMemo(() => ["Innovator", "Coder", "Engineer", "Architect", "Creator"], []);
    const [displayWord, setDisplayWord] = useState(words[0]);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * words.length);
            setOpacity(0); // Fade out
            setTimeout(() => {
                setDisplayWord(words[randomIndex]);
                setOpacity(1); // Fade in
            }, 500); // Half second fade
        }, 3500); // Change every 3.5 seconds
        return () => clearInterval(interval);
    }, [words]);

    return (
        <ElectricBorder color="#00FFFF" speed={1}>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="lg:w-1/2 text-left">
                        <h1 className="text-6xl text-white font-bold mb-4">Natakrit T.</h1>
                        <h2 className={`text-2xl text-white font-bold mb-4 transition-opacity duration-500 ${opacity === 1 ? 'opacity-100' : 'opacity-0'}`}> Software Developer | {displayWord}</h2>
                        <p className="text-lg text-white leading-relaxed">
                            A highly passionate Software Developer specializing in building beautiful, functional, and user-centric applications using modern web technologies.
                            Expert in TypeScript , React , Node.js and other tect stack. Committed to delivering clean, scalable code and consistently seeking out challenging problems to solve.
                            Dedicated to continuous learning and technical excellence.
                        </p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center">
                        <div className="relative flex justify-center">
                            <CircularText text="SOFTWARE * DEVELOPER * AVAILABLE * TO * HIRE * " spinDuration={15} className="absolute w-80 h-80 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                            <img
                                src="/profile.png"
                                alt="Profile Picture"
                                className="w-64 h-64 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-300 relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ElectricBorder>
    );
};

export default MainContent;