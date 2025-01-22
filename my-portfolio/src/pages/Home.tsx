import React from "react";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <div className="overflow-hidden">
            {/* Background Photo and Resume Button */}
            <header
                id='home'
                className="mt-16 relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
                style={{ backgroundImage: "url('/headshot.JPG')" }}
            >
                <h1 className="text-4xl font-bold text-gray-950">Patrick Allen</h1>
                <p className="mt-14 text-lg text-gray-950 font-bold">Software Developer | QA Tester | Problem Solver</p>
                <a
                    href="/Patrick_Allen-Resume.pdf"
                    download
                    className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                >
                    <img src="/download.svg" alt="download resume idcon" className='w-10 h-10' />
                    Download Resume
                </a>
            </header>

            {/* Sections */}
            <Skills />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}
