import React from 'react';
import {
    SiJavascript,
    SiTypescript,
    SiDart,
    SiPhp,
    SiGo,
    SiPython,
    SiHtml5,
    SiReact,
    SiNextdotjs,
    SiVuedotjs,
    SiTailwindcss,
    SiBootstrap,
    SiNodedotjs,
    SiLaravel,
    SiFlutter,
    SiGit,
    SiGithub,
    SiDocker,
    SiPostman,
    SiMongodb,
    SiPostgresql,
    SiMysql,
    SiPrisma,
    SiMariadb,
} from 'react-icons/si';
import { TbBrandInertia } from 'react-icons/tb';
import { BsDatabaseFillGear } from 'react-icons/bs';
import { MdOutlineHttp } from 'react-icons/md';
import { VscCode } from 'react-icons/vsc';

interface TechStackModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface TechItem {
    name: string;
    icon: React.ReactNode;
}

interface TechCategory {
    title: string;
    items: TechItem[];
}

const techCategories: TechCategory[] = [
    {
        title: 'Programming Languages',
        items: [
            { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" /> },
            { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" /> },
            { name: 'Dart', icon: <SiDart className="w-8 h-8" /> },
            { name: 'PHP', icon: <SiPhp className="w-8 h-8" /> },
            { name: 'SQL', icon: <BsDatabaseFillGear className="w-8 h-8" /> },
            { name: 'Go (Golang)', icon: <SiGo className="w-8 h-8" /> },
            { name: 'Python', icon: <SiPython className="w-8 h-8" /> },
            { name: 'HTML/CSS', icon: <SiHtml5 className="w-8 h-8" /> },
        ],
    },
    {
        title: 'Frameworks / Libraries',
        items: [
            { name: 'React.js', icon: <SiReact className="w-8 h-8" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" /> },
            { name: 'Vue.js', icon: <SiVuedotjs className="w-8 h-8" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" /> },
            { name: 'Bootstrap', icon: <SiBootstrap className="w-8 h-8" /> },
            { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8" /> },
            { name: 'Laravel', icon: <SiLaravel className="w-8 h-8" /> },
            { name: 'Inertia.js', icon: <TbBrandInertia className="w-8 h-8" /> },
            { name: 'Flutter', icon: <SiFlutter className="w-8 h-8" /> },
        ],
    },
    {
        title: 'Tools',
        items: [
            { name: 'Git', icon: <SiGit className="w-8 h-8" /> },
            { name: 'GitHub', icon: <SiGithub className="w-8 h-8" /> },
            { name: 'Docker', icon: <SiDocker className="w-8 h-8" /> },
            { name: 'Postman', icon: <SiPostman className="w-8 h-8" /> },
            { name: 'VS Code', icon: <VscCode className="w-8 h-8" /> },
            { name: 'Thunder Client', icon: <MdOutlineHttp className="w-8 h-8" /> },
        ],
    },
    {
        title: 'Database',
        items: [
            { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" /> },
            { name: 'MySQL', icon: <SiMysql className="w-8 h-8" /> },
            { name: 'Prisma ORM', icon: <SiPrisma className="w-8 h-8" /> },
            { name: 'MariaDB', icon: <SiMariadb className="w-8 h-8" /> },
        ],
    },
];

const TechStackModal: React.FC<TechStackModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <dialog className="modal modal-open">
            <div className="modal-box w-11/12 max-w-5xl bg-base-100">
                <button
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                    onClick={onClose}
                >
                    ✕
                </button>
                <h3 className="font-bold text-2xl mb-6 text-center">Tech Stack</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {techCategories.map((category) => (
                        <div key={category.title} className="card bg-base-200 shadow-md">
                            <div className="card-body p-4">
                                <h4 className="card-title text-base font-bold mb-4 justify-center text-center">
                                    {category.title}
                                </h4>
                                <div className="grid grid-cols-3 gap-3">
                                    {category.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex flex-col items-center gap-1 p-2 hover:bg-base-300 rounded-lg transition-colors"
                                        >
                                            {item.icon}
                                            <span className="text-xs text-center mt-1">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={onClose}>close</button>
            </form>
        </dialog>
    );
};

export default TechStackModal;
