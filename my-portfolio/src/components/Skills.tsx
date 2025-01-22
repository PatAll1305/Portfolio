import React from "react";
import AnimatedWrapper from "./Animations";

const skills = [
    {
        name: "JavaScript",
        image: '/javascript.svg',
    },
    {
        name: "React.js",
        image: '/reactImage.svg',
    },
    {
        name: "TypeScript",
        image: '/typescriptImage.svg',
    },
    {
        name: "SQL",
        image: '/sqlImage.svg',
    },
    {
        name: "HTML & CSS",
        image: '/htmlcssImage.svg',
    },
    {
        name: "Playwright (Automated Testing)",
        image: '/playwright.svg',
    },
    {
        name: "Terraform",
        image: '/terraform.svg',
    },
    {
        name: 'Tailwindcss',
        image: '/tailwind.svg'
    },
    {
        name: 'Docker',
        image: '/docker.svg'
    },
    {
        name: "Express.js",
        image: '/express.svg'
    },
    {
        name: 'Flask',
        image: "/flask.svg"
    },
    {
        name: "Vite",
        image: '/vite.svg'
    },
    {
        name: "Postman",
        image: '/postman.svg'
    }
];

export default function Skills() {
    return (

        <section id="skills" className="py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <AnimatedWrapper animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"}>
                        <div key={skill.name} className="flex flex-col items-center">
                            <img src={skill.image} alt={skill.name} className="w-12 h-12 mb-4" />
                            <p className="text-sm font-medium">{skill.name}</p>
                        </div>
                    </AnimatedWrapper>
                ))}
            </div>
        </section>
    );
}
