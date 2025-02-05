import React from "react";
import AnimatedWrapper from "./Animations";

export default function About() {
    return (
        <AnimatedWrapper>
            <div id="about" className="bg-gray-100 py-8 px-6 mt-10">
                <div className="max-w-4xl mx-auto text-gray-800">
                    {/* Header Section */}
                    <header className="text-center mb-6">
                        <h1 className="text-3xl font-bold">About Me</h1>
                        <p className="text-gray-600">Software Engineer • QA Enthusiast • Lifelong Learner</p>
                    </header>

                    {/* Journey Section */}
                    <section className="flex flex-col md:flex-row items-center md:space-x-6 space-y-6 md:space-y-0">
                        <div className="md:w-1/2">
                            <h2 className="text-xl font-semibold mb-2">My Journey</h2>
                            <p className="text-gray-700 text-sm">
                                I started coding at 12, joining <a href="https://www.allstarcode.org/" target="_blank"
                                    rel="noopener noreferrer" className="text-blue-500 underline">All Star Code</a>. Since then, I've specialized in Software QA, automation with <strong>Playwright</strong>, and infrastructure with <strong>Terraform</strong>. Later, I trained at <strong>App Academy</strong>, mastering full-stack development.
                            </p>
                        </div>
                        <div className="md:w-1/4 md:h-1/4 flex justify-center w-1/2 w-1/2">
                            <img src="/journey-image.svg" alt="Journey" className="w-64 rounded-lg shadow-lg" />
                        </div>
                    </section>

                    {/* Skills & Philosophy */}
                    <section className="flex flex-col md:flex-row-reverse items-center gap-0.5 md:space-y-6 space-y-6 md:space-y-0 mt-8">
                        <div className="md:w-1/2">
                            <h2 className="text-xl font-semibold mb-2">Skills & Philosophy</h2>
                            <p className="text-gray-700 text-sm">
                                A <strong>fast learner</strong> and problem solver, I love optimizing systems and contributing to impactful projects. From mastering <strong>Terraform</strong> to refining full-stack skills, I'm always growing.
                            </p>
                        </div>
                        <div className="md:w-1/4 md:h-1/4 flex justify-center w-1/2 h-1/2">
                            <img src="/skills-image.svg" alt="Skills" className="w-64 rounded-lg shadow-lg" />
                        </div>
                    </section>
                </div>
            </div>
        </AnimatedWrapper>
    );
}
