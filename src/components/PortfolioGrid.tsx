import React, { useState } from 'react';
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Code, Briefcase, GraduationCap, Mail, ArrowLeft } from "lucide-react";
import ProjectsContent from './portfolio/ProjectsContent';
import ExperienceContent from './portfolio/ExperienceContent';
import EducationContent from './portfolio/EducationContent';
import ContactContent from './portfolio/ContactContent';

type Section = 'main' | 'projects' | 'experience' | 'education' | 'contact' | null;

interface PortfolioCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ icon, title, description, buttonText, onClick }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 transition-all duration-300">
            <div className="w-12 h-12 text-white mb-4 mx-auto">
                {icon}
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
            <p className="text-white/80 mb-4">{description}</p>
            <ShimmerButton className="w-full" onClick={onClick}>
                {buttonText}
            </ShimmerButton>
        </div>
    );
};

const PortfolioGrid: React.FC = () => {
    const [selected, setSelected] = useState<Section>(null);

    return (
        <>
            {!selected && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 transition-all duration-500 ease-in-out">
                    <PortfolioCard
                        icon={<Code className="w-12 h-12" />}
                        title="Projects"
                        description="Explore my latest work and creative projects"
                        buttonText="View Projects"
                        onClick={() => setSelected('projects')}
                    />
                    <PortfolioCard
                        icon={<Briefcase className="w-12 h-12" />}
                        title="Experience"
                        description="Learn about my professional journey"
                        buttonText="View Experience"
                        onClick={() => setSelected('experience')}
                    />
                    <PortfolioCard
                        icon={<GraduationCap className="w-12 h-12" />}
                        title="Education"
                        description="My academic background and qualifications"
                        buttonText="View Education"
                        onClick={() => setSelected('education')}
                    />
                    <PortfolioCard
                        icon={<Mail className="w-12 h-12" />}
                        title="Contact"
                        description="Get in touch with me"
                        buttonText="Contact Me"
                        onClick={() => setSelected('contact')}
                    />
                </div>
            )}

            {selected && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 transition-all duration-500 ease-in-out">
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        <PortfolioCard
                            icon={<Code className="w-12 h-12" />}
                            title="Projects"
                            description="Explore my latest work and creative projects"
                            buttonText={selected === 'projects' ? 'Selected' : 'View Projects'}
                            onClick={() => setSelected('projects')}
                        />
                        <PortfolioCard
                            icon={<Briefcase className="w-12 h-12" />}
                            title="Experience"
                            description="Learn about my professional journey"
                            buttonText={selected === 'experience' ? 'Selected' : 'View Experience'}
                            onClick={() => setSelected('experience')}
                        />
                        <PortfolioCard
                            icon={<GraduationCap className="w-12 h-12" />}
                            title="Education"
                            description="My academic background and qualifications"
                            buttonText={selected === 'education' ? 'Selected' : 'View Education'}
                            onClick={() => setSelected('education')}
                        />
                        <PortfolioCard
                            icon={<Mail className="w-12 h-12" />}
                            title="Contact"
                            description="Get in touch with me"
                            buttonText={selected === 'contact' ? 'Selected' : 'Contact Me'}
                            onClick={() => setSelected('contact')}
                        />
                    </div>
                    <div className="lg:col-span-2">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                                <h2 className="text-2xl font-bold text-white">
                                    {selected === 'projects' ? 'Projects' : selected === 'experience' ? 'Experience' : selected === 'education' ? 'Education' : 'Contact'}
                                </h2>
                                <div className="flex justify-start sm:justify-end">
                                    <ShimmerButton className="w-full sm:w-auto" onClick={() => setSelected(null)}>
                                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Back to Grid
                                    </ShimmerButton>
                                </div>
                            </div>
                            {selected === 'projects' && <ProjectsContent />}
                            {selected === 'experience' && <ExperienceContent />}
                            {selected === 'education' && <EducationContent />}
                            {selected === 'contact' && <ContactContent />}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PortfolioGrid;