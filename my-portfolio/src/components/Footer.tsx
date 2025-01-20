import React from "react";

export default function Footer() {

    return (
        <footer className="bg-gray-900 text-gray-300 p-6 ">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Section 1: About */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Patrick Allen</h3>
                    <p>
                        I'm capable of building and testing your website.
                    </p>
                </div>

                {/* Section 2: Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                                className="hover:text-blue-400 transition duration-300 cursor-pointer"
                            >
                                Top
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                className="hover:text-blue-400 transition duration-300 cursor-pointer"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                                className="hover:text-blue-400 transition duration-300 cursor-pointer"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                className="hover:text-blue-400 transition duration-300 cursor-pointer"
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="hover:text-blue-400 transition duration-300 cursor-pointer"
                            >
                                Contact Me
                            </a>
                        </li>
                    </ul>
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
