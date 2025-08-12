import {BsClockFill} from "react-icons/bs";
import ProjectDetails from "./ProjectDetails.jsx";

export default function JobRole({role, date, summary}) {
    return<li className="mb-0 ms-0 md:mb-10 md:ms-6">
        <span className="absolute hidden md:flex items-center justify-center w-6 h-6 bg-emerald-100 rounded-full -start-3 ring-8 ring-white">
            <BsClockFill className="text-emerald-700 p-0.5" />
        </span>
        <h2 className="font-normal text-emerald-800">{role}</h2>
        <p className="text-xs mt-1 text-slate-500">{date}</p>
        {
            summary.map((project, index) => {
                return <ProjectDetails className={"mt-3 duration-100 hover:bg-slate-50 rounded-xl"} index={index} complete={project} title={project.name} description={project.description} clients={project.clients} stack={project.stack} keyPoints={project.keyPoints} key={index}/>
            })
        }
    </li>
}