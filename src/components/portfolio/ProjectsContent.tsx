import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsContent: React.FC = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
            liveUrl: "https://example-ecommerce.com",
            githubUrl: "https://github.com/username/ecommerce-platform"
        },
        {
            title: "Task Management App",
            description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            technologies: ["TypeScript", "React", "Firebase", "Tailwind CSS"],
            liveUrl: "https://example-taskapp.com",
            githubUrl: "https://github.com/username/task-management"
        },
        {
            title: "Weather Dashboard",
            description: "A responsive weather dashboard that displays current weather conditions and forecasts for multiple locations with beautiful data visualizations.",
            technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
            liveUrl: "https://example-weather.com",
            githubUrl: "https://github.com/username/weather-dashboard"
        }
    ];

    return (
        <div className="space-y-6">
            {projects.map((project, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                                {tech}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex gap-4">
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </a>
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            View Code
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsContent;