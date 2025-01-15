import React from "react";

const skills = [
    {
        name: "JavaScript",
        description:
            "Proficient in JavaScript, using it extensively for building dynamic and interactive web applications. Experienced with modern ES6+ syntax, asynchronous programming with Promises and async/await, and manipulating the DOM for dynamic content rendering.",
        image: '/javascript.svg',
    },
    {
        name: "React.js",
        description:
            "Expert in React.js, specializing in building reusable components, managing state with Redux, and optimizing performance with React hooks like useMemo and useCallback. Developed responsive, SEO-friendly, and accessible user interfaces. This website was developed using this framework!",
        image: '/reactImage.svg',
    },
    {
        name: "TypeScript",
        description:
            "Implemented TypeScript to enhance codebase maintainability and reduce runtime errors. Skilled in defining custom types, interfaces, and generics to improve code clarity and team collaboration in larger projects. This website was developed using this language!",
        image: '/typescriptImage.svg',
    },
    {
        name: "SQL",
        description:
            "Experienced in designing and managing relational databases with SQL. Proficient in creating efficient schemas, writing complex JOIN queries, and optimizing database performance. Familiar with SQLAlchemy and integrating databases into full-stack applications.",
        image: '/sqlImage.svg',
    },
    {
        name: "HTML & CSS",
        description:
            "Skilled in creating semantic HTML structures and writing clean, maintainable CSS. Proficient with modern layout techniques like Flexbox and Grid, and experienced in implementing responsive design for mobile-first applications using tools like TailwindCSS.",
        image: '/htmlcssImage.svg',
    },
    {
        name: "Playwright (Automated Testing)",
        description:
            "Developed robust automated test suites using Playwright to ensure web application quality. Skilled in writing end-to-end tests, debugging failures, and integrating tests into CI/CD pipelines for continuous deployment.",
        image: '/playwright.svg',
    },
    {
        name: "Terraform",
        description:
            "Hands-on experience with Terraform for infrastructure as code (IaC). Created reusable configurations, managed cloud resources, and implemented policy as code with Rego to ensure compliance and governance.",
        image: '/terraform.svg',
    },
    {
        name: 'Tailwindcss',
        description:
            "Experienced with Tailwindcss for easy and simple styling of elements. This website was developed using this framework!",
        image: '/tailwind.svg'
    }
];


export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4 mt-14">
            <br></br>
            <br></br>
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                        } items-center md:items-stretch bg-white shadow-md rounded-lg overflow-hidden mb-8 w-full max-w-4xl`}
                >
                    <img
                        className="w-full md:w-1/2 h-48 md:h-auto bg-cover bg-center"
                        src={skill.image}
                    />

                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">{skill.name}</h3>
                        <p className="text-gray-600">{skill.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
