import Card from "./Card.jsx";
import { BsClockFill } from "react-icons/bs";
import ProjectDetails from "./ProjectDetails.jsx";
import {ProjectsData} from "../ProjectsData.js";

export default function Projects() {
    return<div className="container mx-auto px-4 pt-4 w-full flex justify-between">
        <Card p={"p-3 px-4"}>
            <ol className="relative border-s-2 border-slate-200 m-3">
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full -start-3 ring-8 ring-white">
                        <BsClockFill className="text-emerald-700 p-0.5" />
                    </span>
                    <h2 className="font-normal text-emerald-800">Senior Software Engineer</h2>
                    <p className="text-xs mt-1 text-slate-500"> July 2024 - August 2025</p>
                    {
                        ProjectsData.map((project, index) => {
                            return <ProjectDetails className={"mt-3"} index={index} title={project.name} description={project.description} clients={project.clients} stack={project.stack} keyPoints={project.keyPoints} key={index}/>
                        })
                    }
                </li>

                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full -start-3 ring-8 ring-white">
                        <BsClockFill className="text-emerald-700 p-0.5" />
                    </span>
                    <h2 className="font-normal text-emerald-800">Software Engineer</h2>
                    <p className="text-xs mt-1 text-slate-500"> April 2022 - July 2024</p>
                </li>
            </ol>
        </Card>
    </div>
}