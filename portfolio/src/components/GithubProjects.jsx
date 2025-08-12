import Card from "./Card.jsx";
import {BsLightningChargeFill} from "react-icons/bs";

const PROJECTS = [
    {
        name: "Personal Portfolio",
        repo: "https://github.com/vishnukalanad/portfolio",
    },
    {
        name: "Food Cart",
        repo: "https://github.com/vishnukalanad/food-ordering",
    },
    {
        name: "Ticket Booking",
        repo: "https://github.com/vishnukalanad/ticket-booking-system",
    },
]

export default function GithubProjects() {
    return<div className="container mx-auto px-4 p-3 w-full flex justify-between">
        <Card flex="_">
            <div className="p-2">
                <p className="text-emerald-800 transition-transform duration-200 animate-pop"><span>Github Projects</span></p>
                <div className="grid grid-cols-3 gap-2 mt-3">
                    {PROJECTS.map(project => {
                        return <div className="bg-slate-100 p-2 rounded-lg" key={project.name}>
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">
                                    <BsLightningChargeFill/>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm">{project.name}</p>
                                    <a href={project.repo} className="text-emerald-800 text-xs" target="_blank" rel="noreferrer">Open repo</a>
                                </div>
                            </div>
                        </div>
                    })}
                    {/*<div className="bg-slate-100 p-2 rounded-lg">*/}
                    {/*    <div className="flex items-center gap-2">*/}
                    {/*        <div className="h-8 w-8 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">*/}
                    {/*            <BsLightningChargeFill/>*/}
                    {/*        </div>*/}
                    {/*        <div className="flex flex-col">*/}
                    {/*            <p className="text-sm">Personal Portfolio</p>*/}
                    {/*            <a href="https://github.com/vishnukalanad/portfolio" className="text-emerald-800 text-xs" target="_blank" rel="noreferrer">Open repo</a>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Card>
    </div>
}