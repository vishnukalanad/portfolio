import Card from "./Card.jsx";
import GithubProject from "./GithubProject.jsx";

const PROJECTS = [
    {
        name: "Eniyo. Kanban Board",
        repo: "https://eniyo.vercel.app/",
        desc: "(Development in progress) A modern Kanban board built with Angular and NgRx, featuring drag-and-drop task management, real-time state updates, and a clean responsive UI powered by Tailwind CSS.",
        stack: ["angular", "tailwind", "ts", "ngrx"],
        live: true
    },
    {
        name: "Weather App",
        repo: "https://outsidenow.vercel.app/",
        desc: "A simple weather application built with Angular, NgRx for state management, and Tailwind CSS for a clean, responsive UI.",
        stack: ["angular", "tailwind", "ts", "ngrx"],
        live: true
    },
    {
        name: "Zentry Clone",
        repo: "https://react-animated-one.vercel.app/",
        desc: "Zentry clone built with React and Tailwind CSS, enhanced with GSAP animations for smooth, interactive transitions. This project replicates a real-world site design while focusing on responsive layouts, component reusability, and performance.",
        stack: ["react", "tailwind", "js", "redux", "html", "css", "gsap"],
        live: true
    },
    {
        name: "Personal Portfolio",
        repo: "https://github.com/vishnukalanad/portfolio/tree/main/portfolio",
        desc: "A responsive and modern personal portfolio built with React and Tailwind CSS, designed to highlight my professional journey, projects, and skills. The site emphasizes simplicity, performance, and clean UI while maintaining a consistent design system. It also integrates smooth animations and interactive elements to create an engaging experience that reflects both my technical skills and design sense.",
        stack: ["react", "tailwind", "js", "redux", "html", "css"],
        live: true
    },
    {
        name: "Food Cart",
        desc: "A basic cart application built to practice state management and component interaction in React. It demonstrates adding, removing, and updating items in a cart, with a focus on clean code and reusability.",
        repo: "https://github.com/vishnukalanad/food-ordering",
        stack: ["react", "tailwind", "js", "html", "css"],
        live: true
    },
    {
        name: "Ticket Booking",
        desc: "A backend ticket booking system developed in Go, featuring APIs to manage flights, bookings, and users. The APIs can be accessed and tested via Postman. This project serves as a reference for learning Go backend development, API design, and data handling.",
        repo: "https://github.com/vishnukalanad/ticket-booking-system",
        stack: ["golang", "psql"],
        live: false
    },
]

export default function GithubProjects() {
    return <div className="container mx-auto px-4 pt-4 w-full min-h-dvh flex justify-between items-center">
        <Card p={"p-3 px-4"} flex="_">
            <div className="">
                <p className={"uppercase text-xs font-semibold text-gray-700"}>projects</p>
                <p className="text-slate-800 transition-transform text-4xl font-semibold">Github Projects</p>
                <p className={"text-lg text-slate-700"}>A collection of my practice and learning projects — exploring frontend with React and Tailwind, and backend with Go. These projects serve as hands-on references to sharpen my skills, experiment with new tools, and document my growth as a developer.</p>
                <div className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-1">
                    {PROJECTS.map(project => {
                        return <GithubProject key={project.name + Math.random() + "x"} project={project} />
                    })}
                </div>
            </div>
        </Card>
    </div>
}