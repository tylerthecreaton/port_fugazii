import React, { useState, useEffect, useMemo } from 'react';
import ElectricBorder from '../ElectricBorder';
import CircularText from '../CircularText';
import TechStackModal from './TechStackModal';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const MainContent: React.FC = () => {
    const words = useMemo(() => ["Innovator", "Coder", "Engineer", "Architect", "Creator"], []);
    const [displayWord, setDisplayWord] = useState(words[0]);
    const [opacity, setOpacity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * words.length);
            setOpacity(0);
            setTimeout(() => {
                setDisplayWord(words[randomIndex]);
                setOpacity(1);
            }, 500);
        }, 3500);
        return () => clearInterval(interval);
    }, [words]);

    return (
        <>
            <ElectricBorder color="#F58549" speed={1}>
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="lg:w-1/2 text-left">
                            <h1 className="text-6xl text-white font-bold mb-4">Natakrit T.</h1>
                            <h2 className={`text-2xl text-white font-bold mb-4 transition-opacity duration-500 ${opacity === 1 ? 'opacity-100' : 'opacity-0'}`}>
                                Software Developer | {displayWord}
                            </h2>
                            <p className="text-lg text-white leading-relaxed">
                                A highly passionate Software Developer specializing in building beautiful, functional, and user-centric applications using modern web technologies.
                                Expert in TypeScript, React, Node.js and{' '}
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="text-amber-400 hover:text-amber-600 underline underline-offset-2 transition-colors cursor-pointer"
                                >
                                    other tech stack
                                </button>
                                . Committed to delivering clean, scalable code and consistently seeking out challenging problems to solve.
                                Dedicated to continuous learning and technical excellence.
                            </p>

                            {/* Social Links */}
                            <div className="flex flex-wrap gap-3 mt-6">
                                <a
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-circle btn-outline border-amber-400 text-amber-400 hover:bg-amber-400 hover:border-amber-400 hover:text-base-100 transition-all duration-300"
                                >
                                    <FaGithub className="text-xl" />
                                </a>
                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-circle btn-outline border-amber-400 text-amber-400 hover:bg-amber-400 hover:border-amber-400 hover:text-base-100 transition-all duration-300"
                                >
                                    <FaLinkedin className="text-xl" />
                                </a>
                                <a
                                    href="https://facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-circle btn-outline border-amber-400 text-amber-400 hover:bg-amber-400 hover:border-amber-400 hover:text-base-100 transition-all duration-300"
                                >
                                    <FaFacebook className="text-xl" />
                                </a>
                                <a
                                    href="mailto:your@email.com"
                                    className="btn btn-circle btn-outline border-amber-400 text-amber-400 hover:bg-amber-400 hover:border-amber-400 hover:text-base-100 transition-all duration-300"
                                >
                                    <MdEmail className="text-xl" />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex justify-center">
                            <div className="relative flex items-center justify-center">
                                {/* Outer decorative rings */}
                                <div className="absolute w-96 h-96 md:w-[420px] md:h-[420px] rounded-full border border-amber-500/20 animate-pulse" />
                                <div className="absolute w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-full border border-amber-400/30" />

                                {/* Animated gradient glow */}
                                <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-amber-500/30 blur-2xl animate-spin-slow" />

                                {/* CircularText */}
                                <CircularText
                                    text="SOFTWARE * DEVELOPER * AVAILABLE * TO * HIRE * "
                                    spinDuration={15}
                                    className="absolute w-72 h-72 md:w-80 md:h-80"
                                />

                                {/* Profile image container with gradient border */}
                                <div className="relative group">
                                    {/* Gradient border ring */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-spin" />

                                    {/* Inner glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-md" />

                                    {/* Profile image */}
                                    <img
                                        src="/profile.png"
                                        alt="Profile Picture"
                                        className="relative w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-2xl shadow-amber-500/25 ring-4 ring-base-300/50 group-hover:scale-105 group-hover:shadow-amber-500/40 transition-all duration-500 z-10"
                                    />
                                </div>

                                {/* Floating decorative dots */}
                                <div className="absolute top-4 right-8 w-3 h-3 bg-amber-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0s' }} />
                                <div className="absolute bottom-8 left-4 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s' }} />
                                <div className="absolute top-1/4 left-0 w-2 h-2 bg-amber-300 rounded-full animate-bounce opacity-40" style={{ animationDelay: '1s' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </ElectricBorder>
            <TechStackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            <div className="mt-12"></div>

            {/* About Me Section */}
            <ElectricBorder color="#F58549" speed={1}>
                <section className="py-16 md:py-24">
                    <div className="container mx-auto px-4 max-w-5xl">
                        {/* Header */}
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white italic mb-4">Who I Am</h2>
                            <p className="text-white/90 max-w-2xl mx-auto">
                                A dedicated Software Developer proficient in Web Development, employing rigorous principles derived from a background in Computer Engineering to craft effective and innovative software solutions.
                            </p>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                            {/* My Background */}
                            <div className="space-y-3 bg-base-200/10 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20">
                                <h3 className="text-xl font-bold text-white">My Background</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Software Developer leveraging a robust Computer Engineering foundation to excel in full-stack web development.
                                    My focus is on delivering efficient and scalable software solutions by applying strong problem-solving skills to complex technical challenges.
                                </p>
                            </div>

                            {/* My Approach */}
                            <div className="space-y-3 bg-base-200/10 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20">
                                <h3 className="text-xl font-bold text-white">My Approach</h3>
                                <p className="text-white/80 leading-relaxed">
                                    My commitment is to deliver high-quality software solutions driven by clean, maintainable code and intuitive design.
                                    I constantly improve my craft by embracing continuous learning and staying current with industry best practices.
                                </p>
                            </div>

                            {/* My Goals */}
                            <div className="space-y-3 bg-base-200/10 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20">
                                <h3 className="text-xl font-bold text-white">My Goals</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Seeking a Full Stack Developer role to apply my skills to high-impact projects.
                                    I aim to collaborate within experienced teams to enhance technical mastery and drive professional advancement.
                                </p>
                            </div>

                            {/* Beyond Coding */}
                            <div className="space-y-3 bg-base-200/10 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20">
                                <h3 className="text-xl font-bold text-white">Beyond Coding</h3>
                                <p className="text-white/80 leading-relaxed">
                                    Beyond coding, I stay current with technology trends and explore emerging tools.
                                    I actively engage in local tech meetups and hackathons to strengthen my professional network and collaborate with the developer community.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </ElectricBorder>
        </>
    );
};

export default MainContent;