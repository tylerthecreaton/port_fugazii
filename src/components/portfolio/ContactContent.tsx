import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';

const ContactContent: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would normally send the form data to a server
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitted(false);
        }, 3000);
    };

    const contactInfo = [
        {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "natakrit@example.com",
            href: "mailto:natakrit@example.com"
        },
        {
            icon: <Phone className="w-5 h-5" />,
            label: "Phone",
            value: "+66 123 456 789",
            href: "tel:+66123456789"
        },
        {
            icon: <MapPin className="w-5 h-5" />,
            label: "Location",
            value: "Bangkok, Thailand",
            href: "#"
        }
    ];

    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            name: "GitHub",
            href: "https://github.com/username"
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            name: "LinkedIn",
            href: "https://linkedin.com/in/username"
        },
        {
            icon: <Twitter className="w-5 h-5" />,
            name: "Twitter",
            href: "https://twitter.com/username"
        }
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                        <p className="text-white/80 mb-6">
                            I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out if you'd like to connect!
                        </p>
                        
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <a 
                                    key={index}
                                    href={info.href}
                                    className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/60">{info.label}</div>
                                        <div className="font-medium">{info.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                        <h3 className="text-xl font-bold text-white mb-4">Connect on Social</h3>
                        <div className="grid grid-cols-3 gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                                >
                                    <div className="text-cyan-400">
                                        {social.icon}
                                    </div>
                                    <span className="text-sm text-white/80">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
                    
                    {isSubmitted ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                            <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                            <p className="text-white/80">Thank you for reaching out. I'll get back to you soon.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                    placeholder="Your Name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                    placeholder="Subject of your message"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-300"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactContent;