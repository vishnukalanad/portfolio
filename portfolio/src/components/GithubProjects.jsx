import Card from "./Card.jsx";
import GithubProject from "./GithubProject.jsx";

const PROJECTS = [
    {
        name: "Personal Portfolio",
        repo: "https://github.com/vishnukalanad/portfolio/tree/main/portfolio",
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
    return <div className="container mx-auto px-4 pt-4 w-full flex justify-between">
        <Card p={"p-3 px-4"} flex="_">
            <div className="">
                <p className="text-emerald-800 transition-transform duration-200 animate-pop">
                    <span>Github Projects</span></p>
                <div className="grid grid-cols-1 gap-2 mt-3 md:grid-cols-2">
                    {PROJECTS.map(project => {
                        return <GithubProject key={project.name + Math.random() + "x"} project={project} />
                    })}
                </div>
            </div>
            <div className="mt-3 text-sm text-slate-500 bg-slate-100 p-2 rounded-lg">
                <p className="px-2">These may look simple, but don’t be fooled — critical skills are at the core, and there’s more cool stuff on the way!</p>
            </div>
        </Card>
    </div>
}