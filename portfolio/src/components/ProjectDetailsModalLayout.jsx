import {useSelector} from "react-redux";

export default function ProjectDetailsModalLayout() {
    const projectData = useSelector(state => state.user.modalData.projectData)
    return<div className="w-full">
        <p className="text-emerald-800">{projectData.name}</p>
        <p className="text-sm text-slate-600 mt-3">{projectData.description}</p>
        <hr className="my-3 border-slate-200" />
        <p className="text-emerald-800">Key Points</p>
        <ol className="list-disc list-outside pl-4 mt-3">
            {projectData.keyPoints.map((item, index) => {
                return <li className="text-sm mt-2 text-slate-600" key={index + Math.random()}>{item}</li>
            })}
        </ol>
        <hr className="my-3 border-slate-200" />
        <p className="text-emerald-800">Clients</p>
        <div className="flex flex-col md:flex-row mt-3 mb-5 gap-2">{
            projectData.clients.map((item, index) => {
                return <span className="text-xs text-center font-medium md:text-left px-2 py-1 bg-slate-200 rounded-full text-slate-700" key={index + Math.random()}>{item}</span>
            })
        }</div>
    </div>
}