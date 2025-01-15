import React from "react";

const projects = [
    {
        name: "MeetUp Clone",
        description: "A full-stack application to organize and join events, built with React and Flask.",
        image: "/meetup-clone.png",
        link: "https://down2meet-qdgz.onrender.com"
    },
    {
        name: "Kickstarter Clone",
        description: "A collaborative project to emulate Kickstarter functionality using Django and React.",
        image: "/kickstarter-clone.png",
        link: "https://startup-1po2.onrender.com"
    },
    {
        name: "ReadersClub Project",
        description: "A SaaS book club app with features like book upload, user authentication, and book liking.",
        image: "/readersclub.png",
        link: "https://readersclub-0mvl.onrender.com"
    },
    {
        name: "MeetUp Clone QA suite",
        description: "Automated QA test suite for a web application, using Playwright and TypeScript.",
        image: "/playwright.svg",
        link: "https://github.com/PatAll1305/Playwright-project"
    },
    {
        name: "Practice challenge",
        description: "A coding challenge I did that had to be created in 15 hours or less.",
        image: "/data-viewer.png",
        link: "https://vg-takehome.onrender.com"
    },
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-gray-100 p-6 mt-14">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                My Projects
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col max-w-screen-md"
                        href={project.link}
                        target="_blank"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4 flex-grow">
                            <h2 className="text-xl font-semibold text-gray-800">
                                {project.name}
                            </h2>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
