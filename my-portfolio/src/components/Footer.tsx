import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();
    return (
        <footer className="bg-gray-900 text-gray-300 p-6 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Section 1: About */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">About Me</h3>
                    <p>
                        I'm a passionate full-stack software engineer specializing in QA and
                        web development. Let's build something amazing together!
                    </p>
                </div>

                {/* Section 2: Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                onClick={() => navigate('/')}
                                className="hover:text-blue-400 transition duration-300 cursor-pointer"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate('/about')}
                                className="hover:text-blue-400 transition duration-300 cursor-pointer"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate('/projects')}
                                className="hover:text-blue-400 transition duration-300 cursor-pointer"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => navigate('/contact')}
                                className="hover:text-blue-400 transition duration-300 cursor-pointer"
                            >
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Section 3: Social Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Connect</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/patrick-allen-540938246/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 transition duration-300 cursor-pointer"
                        >
                            <img
                                src="/linkedin-dark.svg"
                                alt="LinkedIn"
                                className="w-6 h-6"
                            />
                        </a>
                        <a
                            href="https://github.com/PatAll1305"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-200 transition duration-300 cursor-pointer"
                        >
                            <img
                                src="/github-dark.svg"
                                alt="GitHub"
                                className="w-6 h-6 text-white"
                            />
                        </a>
                        <a
                            href="mailto:patrickallen1305@gmail.com"
                            className="hover:text-red-500 transition duration-300 cursor-pointer"
                        >
                            <img src="/email.svg" alt="Email" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                <p>
                    &copy;2025 Patrick Allen. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
