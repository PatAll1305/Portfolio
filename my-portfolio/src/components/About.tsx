import React from "react";
import AnimatedWrapper from "./Animations";

export default function About() {
    return (
        <AnimatedWrapper>
            <div id='about' className="bg-gray-100 py-10 px-6 mt-14">
                <div className="max-w-4xl mx-auto text-gray-800">
                    {/* Header Section */}
                    <header className="text-center mb-10">
                        <h1 className="text-4xl font-bold mb-4">About Me</h1>
                        <h3 className="text-lg text-gray-600">
                            Hi, I'm Patrick Allen—Software Engineer, QA Enthusiast, and Lifelong Learner.
                        </h3>
                    </header>

                    {/* Main Content */}
                    <section className="space-y-16">
                        {/* Journey Section */}
                        <div className="flex flex-col md:flex-row items-center md:space-x-10 space-y-6 md:space-y-0">
                            {/* Text */}
                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-semibold mb-3">My Journey</h2>
                                <p className="text-gray-700 mb-4">
                                    My journey in software development began at age 12 when I joined the{" "}
                                    <a
                                        href="https://www.allstarcode.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 underline"
                                    >
                                        All Star Code
                                    </a>{" "}
                                    bootcamp, an incredible program empowering young men of color to enter the technology
                                    workforce. There, I learned the fundamentals of HTML and CSS, sparking my passion
                                    for software development.
                                </p>
                                <p className="text-gray-700 mb-4">
                                    I entered the tech workforce specializing in Software QA. I wrote automated tests
                                    using <strong>Playwright with TypeScript</strong>, ensuring applications were
                                    reliable and efficient. I also explored the world of DevOps, learning Policy as Code
                                    and Infrastructure as Code with <strong>Terraform</strong>. My dedication led me to
                                    earn an official certification from <strong>HashiCorp</strong>.
                                </p>
                                <p className="text-gray-700">
                                    Later, I joined <strong>App Academy</strong>, where I mastered full-stack
                                    development, learning React.js and backend technologies. I've since continued to
                                    grow by self-teaching frameworks like TailwindCSS and consistently pushing my
                                    boundaries.
                                </p>
                            </div>

                            {/* Image */}
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src="/journey-image.svg"
                                    alt="Journey Illustration"
                                    className="w-80 md:w-96 rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Skills & Philosophy Section */}
                        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-10 space-y-6 md:space-y-0">
                            {/* Text */}
                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-semibold mb-3">My Skills & Philosophy</h2>
                                <p className="text-gray-700 mb-4">
                                    I pride myself on being a <strong>fast learner</strong> and a proactive problem
                                    solver. I thrive in challenging environments, consistently contributing to and
                                    improving the projects I work on. My ability to adapt and grow quickly is proven by
                                    my journey with Terraform, where I went from zero knowledge to earning an official
                                    certification from HashiCorp.
                                </p>
                                <p className="text-gray-700">
                                    I believe in making a positive impact on every project I touch, whether it's
                                    building new systems, optimizing existing ones, or mentoring others. I'm excited to
                                    bring my expertise and passion to meaningful projects and continue growing as a
                                    developer.
                                </p>
                            </div>

                            {/* Image */}
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src="/skills-image.svg"
                                    alt="Skills Illustration"
                                    className="w-80 md:w-96 rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Call to Action */}
                    <footer className="mt-16 text-center">
                        <p className="text-gray-700 text-lg">
                            Thank you for taking the time to learn about me! Feel free to{" "}
                            <a
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="text-blue-500 underline cursor-pointer hover:text-blue-700"
                            >
                                reach out
                            </a>{" "}
                            or connect with me on LinkedIn or GitHub.
                        </p>
                    </footer>
                </div>
            </div >
        </AnimatedWrapper>
    );
}
