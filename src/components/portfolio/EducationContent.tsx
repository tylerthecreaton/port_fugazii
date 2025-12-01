import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const EducationContent: React.FC = () => {
    const education = [
        {
            degree: "Bachelor of Science in Computer Science",
            institution: "Chulalongkorn University",
            location: "Bangkok, Thailand",
            period: "2014 - 2018",
            gpa: "3.75/4.0",
            achievements: [
                "Dean's List for 6 consecutive semesters",
                "President of Computer Science Club",
                "Winner of National Hackathon 2017",
                "Teaching Assistant for Data Structures course"
            ],
            coursework: [
                "Data Structures & Algorithms",
                "Database Systems",
                "Software Engineering",
                "Machine Learning",
                "Web Development",
                "Computer Networks"
            ]
        },
        {
            degree: "Full Stack Web Development Bootcamp",
            institution: "Tech Academy",
            location: "Bangkok, Thailand",
            period: "2019",
            gpa: "Excellent",
            achievements: [
                "Completed 400+ hours of intensive training",
                "Built 5 full-stack projects",
                "Received Outstanding Performance Award"
            ],
            coursework: [
                "React & Redux",
                "Node.js & Express",
                "MongoDB & SQL",
                "RESTful APIs",
                "Authentication & Security",
                "Cloud Deployment"
            ]
        }
    ];

    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "2021",
            credentialId: "AWS-ASA-123456"
        },
        {
            name: "Google Cloud Professional Developer",
            issuer: "Google Cloud",
            date: "2022",
            credentialId: "GCP-PD-789012"
        },
        {
            name: "MongoDB Certified Developer",
            issuer: "MongoDB University",
            date: "2020",
            credentialId: "MDB-CD-345678"
        }
    ];

    return (
        <div className="space-y-8">
            <div className="space-y-6">
                {education.map((edu, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="flex items-start gap-3 mb-4">
                            <GraduationCap className="w-6 h-6 text-cyan-400 mt-1" />
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                                <h4 className="text-lg text-cyan-400 font-semibold">{edu.institution}</h4>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-white/70">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {edu.period}
                            </div>
                            <div className="flex items-center gap-1">
                                <Award className="w-4 h-4" />
                                GPA: {edu.gpa}
                            </div>
                        </div>
                        
                        <div className="mb-4">
                            <h5 className="text-white font-semibold mb-2">Achievements:</h5>
                            <ul className="space-y-1">
                                {edu.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex} className="text-white/80 flex items-start gap-2">
                                        <span className="text-cyan-400 mt-1">•</span>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h5 className="text-white font-semibold mb-2">Relevant Coursework:</h5>
                            <div className="flex flex-wrap gap-2">
                                {edu.coursework.map((course, courseIndex) => (
                                    <span key={courseIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-cyan-400" />
                    Certifications
                </h3>
                <div className="space-y-3">
                    {certifications.map((cert, index) => (
                        <div key={index} className="border-l-2 border-cyan-500/30 pl-4">
                            <h4 className="text-white font-semibold">{cert.name}</h4>
                            <p className="text-cyan-400 text-sm">{cert.issuer}</p>
                            <div className="flex justify-between text-sm text-white/70 mt-1">
                                <span>{cert.date}</span>
                                <span>ID: {cert.credentialId}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationContent;