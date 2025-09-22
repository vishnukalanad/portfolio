import ProjectDetails from "./ProjectDetails.jsx";
import {FaAt, FaBriefcase} from "react-icons/fa6";

export default function JobRole({role, date, summary}) {
    return <div className={"gap-2"} id={"jobTitleTrigger"}>
        <div className={"flex items-center gap-2"}>
            <div className={"flex bg-slate-200 p-3 rounded-lg"}>
                <span className={"text-slate-700"}><FaBriefcase/></span>
            </div>
            <div className={"flex flex-col w-full py-2 "} id={"jobTitles"}>
                <p className={"text-black text-lg"}>{role}</p>
                <p className={"text-sm font-medium text-black"}>{date}</p>
            </div>
        </div>
        <p className={"text-sm mt-2 px-2 py-1 w-fit bg-slate-100 rounded-xl text-slate-500 flex items-center gap-1"}><span><FaAt /></span> <span className={"text-slate-700 font-semibold"}>Digiledge</span> by <span className={"font-semibold text-emerald-800"}>MintOak</span></p>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-2 mt-3"}>
            {
                summary.map((project, index) => {
                    return <ProjectDetails
                        className={`col-span-1 rounded-2xl ${project.bg}`}
                        index={index} complete={project} title={project.name} description={project.description}
                        clients={project.clients} stack={project.stack} keyPoints={project.keyPoints} key={index}/>
                })
            }
        </div>
    </div>
}