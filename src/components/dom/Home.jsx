import React from 'react'
import imgProfile from '../../assets/imgprofile.png'
import authImage from '../../assets/auth.png'
import smartmedImage from '../../assets/smartmed.jpg'
import memoImage from '../../assets/memo.webp'


import ProjectCarousel from '../ui/ProjectCarousel'

import OrbitalName from '../ui/OrbitalName'
import SkillMeter from '../ui/SkillMeter'
import ProfileAvatar from '../ui/ProfileAvatar'
import LetsConnect from '../ui/LetsConnect'

const Home = () => {

    const projects = [
        {
            title: "Pattern Based Auth System",
            description: "A simple pattern based authentication system which uses a freehand pattern to authenticate users",
            image: authImage,
            tech: ["React", "material UI"],
            url: "https://patternauthsystem.netlify.app"
        },
        {
            title: "Smart Meds",
            description: "An application which helps users to manage their medications and doctor to patient communication like reports and prescriptions",
            image: smartmedImage,
            tech: ["React Native", "Expo", "express.js", "node.js", "MongoDB", "oauth"],
            url: "https://github.com/ranjith-devop/Smartmeds.git"
        },
        {
            title: "Memo",
            description: "A personal memory management application with many features to manage our memory",
            image: memoImage,
            tech: ["React Native", "Expo", "express.js", "node.js", "local storage"],
            url: "https://github.com/ranjith-devop/Memo.git"
        }

    ]

    return (
        <main className="w-full relative">
            {/* Hero Section */}
            <section className="min-h-screen w-full flex flex-col justify-center p-12 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
                </div>



                <div className="max-w-4xl mt-20 z-10 relative">
                    <div className="mb-6">
                        <OrbitalName>
                            <h1 className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-white to-neon-purple animate-gradient-x tracking-tighter p-4">
                                RANJITH
                            </h1>
                        </OrbitalName>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-gray-300 text-xl md:text-2xl max-w-3xl leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                            Aspiring Fullstack Developer <br />
                            <span className="text-neon-pink">Turning Ideas into Code</span> Turning Code into Impact
                        </p>
                    </div>
                </div>

                {/* Profile Image - Top Right */}
                <div className="relative md:absolute mt-10 md:mt-0 md:top-42 md:right-24 block z-10 mx-auto md:mx-0">
                    <ProfileAvatar
                        src={imgProfile}
                        alt="Ranjith"
                    />
                </div>

                <div className="absolute bottom-12 left-0 w-full">
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="min-h-screen w-full flex flex-col justify-center items-end p-12 text-right relative">
                {/* Spotlight Effect */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(188,19,254,0.1),transparent_70%)] pointer-events-none"></div>

                {/* Floating Geometric Shapes */}
                <div className="absolute top-20 left-20 w-32 h-32 border border-neon-blue/20 rounded-full animate-float opacity-50"></div>
                <div className="absolute bottom-40 left-40 w-24 h-24 border border-neon-pink/20 rotate-45 animate-spin-slow opacity-30"></div>

                <div className="max-w-3xl relative z-10">
                    <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 relative inline-block group mix-blend-overlay">
                        ABOUT ME
                        <span className="absolute -bottom-2 left-0 w-0 h-2 bg-neon-blue transition-all duration-500 group-hover:w-full shadow-[0_0_20px_#00f3ff]"></span>
                    </h2>
                    <p className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed font-light backdrop-blur-sm bg-black/20 p-6 rounded-xl border-r-4 border-neon-purple hover:border-neon-blue transition-colors duration-500">
                        I am a passionate fresher interested in <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">Fullstack Development</span>.
                        I love building scalable web applications and exploring new technologies.
                    </p>
                    <div className="flex flex-wrap gap-8 justify-end">
                        {[
                            { name: 'Java', pct: 80 },
                            { name: 'Web technologies', pct: 80 },
                            { name: 'React JS', pct: 80 },
                            { name: 'Tailwind', pct: 80 },
                            { name: 'Node.js', pct: 80 },
                            { name: 'Express.js', pct: 75 },
                            { name: 'Mongo DB', pct: 70 },
                            { name: 'React Native', pct: 70 },
                            { name: 'Git', pct: 90 }
                        ].map((skill, i) => (
                            <SkillMeter key={skill.name} skill={skill.name} percentage={skill.pct} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="min-h-screen w-full flex flex-col justify-center py-12 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="w-full relative z-10">
                    <h2 className="text-5xl md:text-8xl font-bold text-white mb-20 text-center relative inline-block left-1/2 -translate-x-1/2 group cursor-default">
                        SELECTED WORKS
                        <span className="absolute -bottom-4 left-0 w-0 h-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink transition-all duration-700 group-hover:w-full"></span>
                    </h2>
                    <ProjectCarousel projects={projects} />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="min-h-screen w-full flex flex-col justify-center items-center p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-pink/10 via-black to-black"></div>

                <div className="max-w-4xl relative z-10 flex flex-col items-center">
                    <h2 className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-orange-500 mb-12 animate-pulse-slow">
                        LET'S CONNECT
                    </h2>

                    <div className="flex flex-col md:flex-row gap-12 items-start justify-center w-full">
                        {/* Email CTA */}
                        <div className="flex flex-col items-center md:items-start text-left">
                            <p className="text-gray-400 text-lg mb-4">Drop me a line at</p>
                            <a href="mailto:ranjitran9597@gmail.com" className="text-2xl md:text-4xl text-white hover:text-neon-blue transition-colors relative group mb-8">
                                ranjitran9597@gmail.com
                                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-neon-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                            </a>
                            <p className="text-gray-500 max-w-xs">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                        </div>

                        {/* Interactive Links */}
                        <LetsConnect />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
