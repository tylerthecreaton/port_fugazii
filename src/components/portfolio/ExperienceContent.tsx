import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceContent: React.FC = () => {
    const experiences = [
        {
            title: "Senior Full Stack Developer",
            company: "Tech Innovation Lab",
            location: "Bangkok, Thailand",
            period: "Jan 2022 - Present",
            responsibilities: [
                "Lead development of microservices architecture serving 1M+ users",
                "Mentor junior developers and conduct code reviews",
                "Implement CI/CD pipelines reducing deployment time by 40%",
                "Collaborate with product team to define technical requirements"
            ],
            technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
        },
        {
            title: "Full Stack Developer",
            company: "Digital Solutions Co.",
            location: "Bangkok, Thailand",
            period: "Jun 2020 - Dec 2021",
            responsibilities: [
                "Developed and maintained 15+ client projects using React and Node.js",
                "Optimized application performance improving load time by 60%",
                "Integrated third-party APIs and payment gateways",
                "Participated in agile development processes and sprint planning"
            ],
            technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "AWS"]
        },
        {
            title: "Frontend Developer",
            company: "Creative Web Studio",
            location: "Chiang Mai, Thailand",
            period: "Aug 2018 - May 2020",
            responsibilities: [
                "Built responsive web interfaces for various client projects",
                "Implemented pixel-perfect designs from Figma and Adobe XD",
                "Improved website accessibility following WCAG guidelines",
                "Collaborated with backend team to integrate RESTful APIs"
            ],
            technologies: ["JavaScript", "React", "HTML5", "CSS3", "SASS"]
        }
    ];

    return (
        <div className="space-y-8">
            {experiences.map((experience, index) => (
                <div key={index} className="relative border-l-2 border-cyan-500/30 pl-8 pb-8 last:pb-0">
                    <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-500 rounded-full -translate-x-1/2"></div>
                    
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                        <h4 className="text-lg text-cyan-400 font-semibold mb-3">{experience.company}</h4>
                        
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/70">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {experience.period}
                            </div>
                            <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {experience.location}
                            </div>
                        </div>
                        
                        <ul className="space-y-2 mb-4">
                            {experience.responsibilities.map((responsibility, respIndex) => (
                                <li key={respIndex} className="text-white/80 flex items-start gap-2">
                                    <span className="text-cyan-400 mt-1">•</span>
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ExperienceContent;