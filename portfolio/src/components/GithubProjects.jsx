import Card from "./Card.jsx";
import GithubProject from "./GithubProject.jsx";

const PROJECTS = [
    {
        name: "Personal Portfolio",
        repo: "https://github.com/vishnukalanad/portfolio",
        stack: ["react", "tailwind", "js", "redux", "html", "css"],
        live: true
    },
    {
        name: "Food Cart",
        repo: "https://github.com/vishnukalanad/food-ordering",
        stack: ["react", "tailwind", "js", "html", "css"],
        live: true
    },
    {
        name: "Ticket Booking",
        repo: "https://github.com/vishnukalanad/ticket-booking-system",
        stack: ["golang", "psql"],
        live: false
    },
]

export default function GithubProjects() {
    return <div className="container mx-auto px-4 p-3 w-full flex justify-between">
        <Card flex="_">
            <div className="p-2">
                <p className="text-emerald-800 transition-transform duration-200 animate-pop">
                    <span>Github Projects</span></p>
                <div className="grid grid-cols-1 gap-2 mt-3 md:grid-cols-2">
                    {PROJECTS.map(project => {
                        return <GithubProject key={project.name + Math.random() + "x"} project={project} />
                    })}
                </div>
            </div>
        </Card>
    </div>
}