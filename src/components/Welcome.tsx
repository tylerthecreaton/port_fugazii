import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dither from './Dither';
import TargetCursor from './TargetCursor';
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { LockKeyhole, LockKeyholeOpen } from "lucide-react";
const Welcome: React.FC = () => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const navigate = useNavigate();

    const handleUnlock = () => {
        setIsUnlocked(true);
        // นำทางไปยังหน้า Receive Guest หลังจาก unlock
        setTimeout(() => {
            navigate('/receive-guest');
        }, 500); // รอ 0.5 วินาทีเพื่อให้แสดง animation ของการ unlock
    };
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
                        Welcome to My Portfolio
                    </h1>
                    <p className="py-4 sm:py-6 text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w mx-auto">
                        Hi, I'm Fugazii. A passionate developer creating amazing digital experiences.
                    </p>
                    <div className="flex justify-center mt-6 sm:mt-8">
                        <ShimmerButton
                            className="btn btn-primary cursor-target text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
                            onClick={handleUnlock}
                        >
                            <span className="hidden sm:inline">Unlock to Know Me</span>
                            <span className="sm:hidden">Unlock</span>
                            <div className="ml-2 size-4 sm:size-6 relative overflow-hidden">
                                <LockKeyhole
                                    className={`absolute inset-0 transition-all duration-200 ${isUnlocked ? 'opacity-0 rotate-12 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
                                />
                                <LockKeyholeOpen
                                    className={`absolute inset-0 transition-all duration-200 ${isUnlocked ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-12 scale-0'}`}
                                />
                            </div>
                        </ShimmerButton>
                    </div>
                </div>
            </div>
            <TargetCursor />
        </div>
    );
};

export default Welcome;
