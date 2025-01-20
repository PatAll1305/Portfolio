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
                className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
                style={{ backgroundImage: "" }}
            >
                <h1 className="text-4xl font-bold">Patrick Allen</h1>
                <p className="mt-4 text-lg">Software Developer | Fast Learner | Problem Solver</p>
                <a
                    href="/.pdf"
                    download
                    className="mt-6 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
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
