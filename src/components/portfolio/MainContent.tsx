import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ElectricBorder from "../ElectricBorder";
import CircularTextWithImage from "../CircularTextWithImage";
import TechStackModal from "./TechStackModal";
import LogoLoop, { type LogoItem } from "../LogoLoop";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
} from "react-icons/si";
import { TbBrandInertia } from "react-icons/tb";
import { BsDatabaseFillGear } from "react-icons/bs";
import { VscCode } from "react-icons/vsc";

const MainContent: React.FC = () => {
  const words = useMemo(
    () => ["Innovator", "Coder", "Engineer", "Architect", "Creator"],
    []
  );
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
              <h1 className="text-6xl text-white font-bold mb-4">
                Natakrit T.
              </h1>
              <h2
                className={`text-2xl text-white font-bold mb-4 transition-opacity duration-500 ${
                  opacity === 1 ? "opacity-100" : "opacity-0"
                }`}
              >
                Software Developer | {displayWord}
              </h2>
              <p className="text-lg text-white leading-relaxed">
                A highly passionate Software Developer specializing in building
                beautiful, functional, and user-centric applications using
                modern web technologies. Expert in TypeScript, React, Node.js
                and{" "}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-amber-400 hover:text-amber-600 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  other tech stack
                </button>
                . Committed to delivering clean, scalable code and consistently
                seeking out challenging problems to solve. Dedicated to
                continuous learning and technical excellence.
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
              <CircularTextWithImage
                text="SOFTWARE * DEVELOPER * AVAILABLE * TO * HIRE * "
                spinDuration={15}
                onHover="speedUp"
                imageSrc="/profile.png"
                imageAlt="Profile Picture"
              />
            </div>
          </div>
        </div>
      </ElectricBorder>
      <TechStackModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="mt-12"></div>

      {/* About Me Section */}
      <ElectricBorder color="#F58549" speed={1}>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white italic mb-4">
                Who I Am
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                A dedicated Software Developer proficient in Web Development,
                employing rigorous principles derived from a background in
                Computer Engineering to craft effective and innovative software
                solutions.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* My Background */}
              <div className="space-y-3 bg-base-200/10 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20">
                <h3 className="text-xl font-bold text-white">My Background</h3>
                <p className="text-white/80 leading-relaxed">
                  Software Developer leveraging a robust Computer Engineering
                  foundation to excel in full-stack web development. My focus is
                  on delivering efficient and scalable software solutions by
                  applying strong problem-solving skills to complex technical
                  challenges.
                </p>
              </div>

              {/* My Approach */}
              <div className="space-y-3 bg-base-200/10 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20">
                <h3 className="text-xl font-bold text-white">My Approach</h3>
                <p className="text-white/80 leading-relaxed">
                  My commitment is to deliver high-quality software solutions
                  driven by clean, maintainable code and intuitive design. I
                  constantly improve my craft by embracing continuous learning
                  and staying current with industry best practices.
                </p>
              </div>

              {/* My Goals */}
              <div className="space-y-3 bg-base-200/10 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20">
                <h3 className="text-xl font-bold text-white">My Goals</h3>
                <p className="text-white/80 leading-relaxed">
                  Seeking a Full Stack Developer role to apply my skills to
                  high-impact projects. I aim to collaborate within experienced
                  teams to enhance technical mastery and drive professional
                  advancement.
                </p>
              </div>

              {/* Beyond Coding */}
              <div className="space-y-3 bg-base-200/10 backdrop-blur-sm p-6 rounded-lg border border-amber-400/20">
                <h3 className="text-xl font-bold text-white">Beyond Coding</h3>
                <p className="text-white/80 leading-relaxed">
                  Beyond coding, I stay current with technology trends and
                  explore emerging tools. I actively engage in local tech
                  meetups and hackathons to strengthen my professional network
                  and collaborate with the developer community.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ElectricBorder>

      <div className="mt-12"></div>

      {/* Tech Stack Section */}
      <ElectricBorder color="#F58549" speed={1}>
        <section className="py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            {/* Header with Motion */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                className="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                My Toolkit
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold text-white italic mb-4">
                Tech Stack
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </motion.div>

            {/* Animated Glow Background */}
            <motion.div
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-amber-400/5 rounded-full blur-3xl" />
              </div>

              {/* Logo Loop Container with Glass Effect */}
              <motion.div
                className="relative bg-base-200/20 backdrop-blur-sm rounded-2xl border border-amber-400/10 p-8 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-amber-400/30 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-amber-400/30 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-amber-400/30 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-amber-400/30 rounded-br-2xl" />

                {/* Logo Loop */}
                <LogoLoop
                  logos={
                    [
                      // Programming Languages
                      {
                        node: (
                          <SiJavascript className="text-[#F7DF1E] drop-shadow-[0_0_8px_rgba(247,223,30,0.5)]" />
                        ),
                        title: "JavaScript",
                      },
                      {
                        node: (
                          <SiTypescript className="text-[#3178C6] drop-shadow-[0_0_8px_rgba(49,120,198,0.5)]" />
                        ),
                        title: "TypeScript",
                      },
                      {
                        node: (
                          <SiDart className="text-[#0175C2] drop-shadow-[0_0_8px_rgba(1,117,194,0.5)]" />
                        ),
                        title: "Dart",
                      },
                      {
                        node: (
                          <SiPhp className="text-[#777BB4] drop-shadow-[0_0_8px_rgba(119,123,180,0.5)]" />
                        ),
                        title: "PHP",
                      },
                      {
                        node: (
                          <BsDatabaseFillGear className="text-[#336791] drop-shadow-[0_0_8px_rgba(51,103,145,0.5)]" />
                        ),
                        title: "SQL",
                      },
                      {
                        node: (
                          <SiGo className="text-[#00ADD8] drop-shadow-[0_0_8px_rgba(0,173,216,0.5)]" />
                        ),
                        title: "Go",
                      },
                      {
                        node: (
                          <SiPython className="text-[#3776AB] drop-shadow-[0_0_8px_rgba(55,118,171,0.5)]" />
                        ),
                        title: "Python",
                      },
                      {
                        node: (
                          <SiHtml5 className="text-[#E34F26] drop-shadow-[0_0_8px_rgba(227,79,38,0.5)]" />
                        ),
                        title: "HTML/CSS",
                      },
                      // Frameworks / Libraries
                      {
                        node: (
                          <SiReact className="text-[#61DAFB] drop-shadow-[0_0_8px_rgba(97,218,251,0.5)]" />
                        ),
                        title: "React.js",
                      },
                      {
                        node: (
                          <SiNextdotjs className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                        ),
                        title: "Next.js",
                      },
                      {
                        node: (
                          <SiVuedotjs className="text-[#4FC08D] drop-shadow-[0_0_8px_rgba(79,192,141,0.5)]" />
                        ),
                        title: "Vue.js",
                      },
                      {
                        node: (
                          <SiTailwindcss className="text-[#06B6D4] drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" />
                        ),
                        title: "Tailwind CSS",
                      },
                      {
                        node: (
                          <SiBootstrap className="text-[#7952B3] drop-shadow-[0_0_8px_rgba(121,82,179,0.5)]" />
                        ),
                        title: "Bootstrap",
                      },
                      {
                        node: (
                          <SiNodedotjs className="text-[#339933] drop-shadow-[0_0_8px_rgba(51,153,51,0.5)]" />
                        ),
                        title: "Node.js",
                      },
                      {
                        node: (
                          <SiLaravel className="text-[#FF2D20] drop-shadow-[0_0_8px_rgba(255,45,32,0.5)]" />
                        ),
                        title: "Laravel",
                      },
                      {
                        node: (
                          <TbBrandInertia className="text-[#9553E9] drop-shadow-[0_0_8px_rgba(149,83,233,0.5)]" />
                        ),
                        title: "Inertia.js",
                      },
                      {
                        node: (
                          <SiFlutter className="text-[#02569B] drop-shadow-[0_0_8px_rgba(2,86,155,0.5)]" />
                        ),
                        title: "Flutter",
                      },
                      // Tools
                      {
                        node: (
                          <SiGit className="text-[#F05032] drop-shadow-[0_0_8px_rgba(240,80,50,0.5)]" />
                        ),
                        title: "Git",
                      },
                      {
                        node: (
                          <SiGithub className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                        ),
                        title: "GitHub",
                      },
                      {
                        node: (
                          <SiDocker className="text-[#2496ED] drop-shadow-[0_0_8px_rgba(36,150,237,0.5)]" />
                        ),
                        title: "Docker",
                      },
                      {
                        node: (
                          <SiPostman className="text-[#FF6C37] drop-shadow-[0_0_8px_rgba(255,108,55,0.5)]" />
                        ),
                        title: "Postman",
                      },
                      {
                        node: (
                          <VscCode className="text-[#007ACC] drop-shadow-[0_0_8px_rgba(0,122,204,0.5)]" />
                        ),
                        title: "VS Code",
                      },
                      // Database
                      {
                        node: (
                          <SiMongodb className="text-[#47A248] drop-shadow-[0_0_8px_rgba(71,162,72,0.5)]" />
                        ),
                        title: "MongoDB",
                      },
                      {
                        node: (
                          <SiPostgresql className="text-[#4169E1] drop-shadow-[0_0_8px_rgba(65,105,225,0.5)]" />
                        ),
                        title: "PostgreSQL",
                      },
                      {
                        node: (
                          <SiMysql className="text-[#4479A1] drop-shadow-[0_0_8px_rgba(68,121,161,0.5)]" />
                        ),
                        title: "MySQL",
                      },
                      {
                        node: (
                          <SiPrisma className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                        ),
                        title: "Prisma ORM",
                      },
                      {
                        node: (
                          <SiMariadb className="text-[#003545] drop-shadow-[0_0_8px_rgba(0,53,69,0.5)]" />
                        ),
                        title: "MariaDB",
                      },
                    ] as LogoItem[]
                  }
                  speed={60}
                  direction="left"
                  logoHeight={56}
                  gap={80}
                  pauseOnHover={true}
                  scaleOnHover={true}
                  fadeOut={true}
                  fadeOutColor="#1d232a"
                />
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { number: "8+", label: "Languages" },
                { number: "9+", label: "Frameworks" },
                { number: "6+", label: "Tools" },
                { number: "5+", label: "Databases" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-base-200/10 rounded-xl border border-amber-400/10 hover:border-amber-400/30 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <span className="text-3xl md:text-4xl font-bold text-amber-400">
                    {stat.number}
                  </span>
                  <p className="text-white/70 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </ElectricBorder>
    </>
  );
};

export default MainContent;
