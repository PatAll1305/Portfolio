import React from "react";
import ScrollProgress from "./ScrollProgress";
import ThemeToggle from "./Theme";

export default function Header() {
    return (
        <div className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg mb-10">
            <div className="container mx-auto flex justify-between items-center">
                {/* Portfolio Title */}
                <h1
                    className="text-xl font-bold cursor-pointer hover:text-blue-400 transition-colors"
                    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Patrick Allen
                </h1>
                {/* <ThemeToggle /> */}
                {/* Navigation Links */}
                <nav>
                    <div className="flex space-x-4">
                        <a
                            onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hover:text-blue-400 cursor-pointer transition-colors"
                        >
                            Top
                        </a>
                        <a
                            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hover:text-blue-400 cursor-pointer transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hover:text-blue-400 cursor-pointer transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hover:text-blue-400 cursor-pointer transition-colors"
                        >
                            About
                        </a>
                        <a
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="hover:text-blue-400 cursor-pointer transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </nav>
            </div>
            <ScrollProgress />
        </div>
    );
};
