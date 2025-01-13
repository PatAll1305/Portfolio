import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <header className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Portfolio Title */}
                <h1
                    className="text-xl font-bold cursor-pointer hover:text-blue-400 transition-colors"
                    onClick={() => navigate('/')}
                >
                    My Portfolio
                </h1>

                {/* Navigation Links */}
                <nav>
                    <div className="flex space-x-4">
                        <a
                            onClick={() => navigate('/')}
                            className="hover:text-blue-400 cursor-pointer transition-colors"
                        >
                            Home
                        </a>
                        <a
                            onClick={() => navigate('/about')}
                            className="hover:text-blue-400 cursor-pointer transition-colors"
                        >
                            About
                        </a>
                        <a
                            onClick={() => navigate('/projects')}
                            className="hover:text-blue-400 cursor-pointer transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            onClick={() => navigate('/contact')}
                            className="hover:text-blue-400 cursor-pointer transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};
