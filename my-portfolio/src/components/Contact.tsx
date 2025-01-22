import React from "react";
import AnimatedWrapper from "./Animations";

export default function Contact() {
    return (
        <AnimatedWrapper >
            <div id='contact' className="flex flex-col justify-center items-center bg-gray-100 p-4 sm:p-6 rounded-lg shadow-md max-w-md w-full mx-auto space-y-6 mt-20">
                <h2 className="text-2xl font-semibold text-gray-700">Contact Me</h2>
                <p className="text-gray-600 text-center max-w-sm">
                    Feel free to connect with me on LinkedIn, check out my GitHub projects, or email me directly.
                </p>

                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/patrick-allen-540938246/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my LinkedIn profile"
                    className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-blue-500"
                >
                    <img src="/linkedin-dark.svg" alt="LinkedIn icon" className="w-6 h-6" />
                    LinkedIn
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/PatAll1305"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit my GitHub profile"
                    className="flex items-center gap-3 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-gray-700"
                >
                    <img src="/github-dark.svg" alt="GitHub icon" className="w-6 h-6" />
                    GitHub
                </a>

                {/* Email */}
                <a
                    href="https://mail.google.com/mail/u/0/?fs=1&to=patrickallen1305@gmail.com&su=Contacting+you+for+offer&tf=cm"
                    aria-label="Send me an email"
                    className="flex items-center gap-3 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
                    target="_blank"
                >
                    <img src="/email.svg" alt="Email Icon" className="w-6 h-6" />
                    Gmail
                </a>
            </div>
        </AnimatedWrapper>
    );
}