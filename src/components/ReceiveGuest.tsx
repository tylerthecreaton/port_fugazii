import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Dither from './Dither';
import TargetCursor from './TargetCursor';
import CircularText from './CircularText';
// import CurvedLoop from './CurvedLoop';
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { ArrowLeft } from "lucide-react";

const ReceiveGuest: React.FC = () => {
    const [countdown, setCountdown] = useState(7);
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();
    const hasNavigated = useRef(false);

    useEffect(() => {
        if (hasNavigated.current) return;

        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    setTimeout(() => {
                        hasNavigated.current = true;
                        navigate('/portfolio');
                    }, 500);
                    return 0;
                }

                setIsAnimating(true);
                setTimeout(() => setIsAnimating(false), 500);
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

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
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                        Receive Guest
                    </h1>
                    <p className="py-4 sm:py-6 text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w mx-auto">
                        Welcome to my creative space! Feel free to explore my work and get to know me better.
                    </p>
                    <div className="mb-6 flex flex-col items-center">
                        <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                            <CircularText
                                text="JUST*WAIT*A*MOMENT*SIR*"
                                spinDuration={10}
                                onHover="pause"
                                className="absolute inset-0"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className={`text-4xl sm:text-5xl font-bold text-white transition-all duration-300 ${isAnimating ? 'scale-125 animate-pulse' : 'scale-100'}`}>
                                    {countdown}
                                </span>
                            </div>
                        </div>
                        <p className="mt-2 text-white/80 text-sm sm:text-base">Redirecting to portfolio in {countdown} seconds...</p>
                    </div>
                    <div className="flex justify-center mt-6 sm:mt-8">
                        <ShimmerButton
                            className="btn btn-primary cursor-target text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6 mr-2" />
                            <span className="hidden sm:inline">Back to Welcome</span>
                            <span className="sm:hidden">Back</span>
                        </ShimmerButton>
                    </div>
                </div>
            </div>
            <TargetCursor />
        </div>
    );
};

export default ReceiveGuest;