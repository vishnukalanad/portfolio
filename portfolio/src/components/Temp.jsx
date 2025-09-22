import GithubProject from "./GithubProject.jsx";
import Card from "./Card.jsx";

<div className="p-2 ">
    <p className="text-emerald-800 font-medium transition-transform duration-200 animate-pop">Skills</p>
    <div>
        <p className="text-sm text-slate-600 mt-2 ">
            I have a strong background in software development and have worked with a variety of
            technologies.
        </p>
    </div>

    <div className="mt-3 transition-transform duration-200 animate-pop">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 font-medium">
            <tr>
                <td className="px-6 py-2">
                    <p>Technology</p>
                </td>
                <td className="px-6 py-2">
                    <p>Proficiency</p>
                </td>
            </tr>
            </thead>
            <tbody className="text-sm">
            {SKILLS.map(skill => {
                return <tr className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                           key={skill.name + Math.random() + "x"}>
                    <td className="px-6 py-1">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center rounded-full bg-white h-8">
                                <img src={skill.logo} alt="logo" className="w-4 h-4"/>
                            </div>
                            <p className="text-sm">{skill.name}</p>
                        </div>
                    </td>
                    <td className="px-6 py-1">
                        <div className="w-full h-1.5 bg-gray-200 rounded-full">
                            <div className="bg-emerald-700 h-1.5 rounded-full" style={{width:skill.proficiency + "%"}}></div>
                        </div>
                    </td>
                </tr>
            })}
            </tbody>
        </table>

        <div className="mt-3 text-sm text-slate-500 bg-slate-100 p-2 rounded-lg transition-transform duration-200 animate-pop">
            <p className="italic text-center">"Live as if you were to die tomorrow. Learn as if you were to live forever.” <br /><span className="font-medium">— Mahatma Gandhi</span></p>
            <hr className="my-3 border-slate-200" />
            <p className="mt-2 indent-8">This reflects my belief that no skill is ever truly “finished” — technology evolves, and so do I.
                My listed proficiencies are a snapshot of my current expertise, but I’m always exploring new tools,
                refining techniques, and deepening my knowledge.This reflects <span className="font-medium underline italic text-slate-600">my belief that no skill is ever truly “finished” — technology evolves, and so do I</span>.
                My listed proficiencies are a snapshot of my current expertise, but I’m always exploring new tools,
                refining techniques, and deepening my knowledge.</p>
        </div>
    </div>
</div>




/// Experience

<li className="mb-0 ms-0 md:mb-10 md:ms-6">
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


<div style={{cursor: "pointer"}} {...props} onClick={() => {
    openDetails(complete)
}}>
    <div className="text-sm flex flex-col items-start md:flex-row gap-2 ">
        <span className="text-xs rounded-full bg-yellow-800/25 px-3 py-0.5 font-medium">Project {index + 1}</span>
        <p className="font-medium text-yellow-900 hover:text-yellow-700 hover:underline flex items-center gap-2">{title} <BsArrowUpRightCircleFill className="text-yellow-900 text-xs"/></p>
    </div>
    <div className="bg-slate-100 p-2 rounded-lg mt-2 md:mt-3">
        <p className="text-sm text-slate-600 font-normal">{description}</p>
    </div>
    <div className="text-xs flex flex-col text-center gap-2 mt-3 md:flex-row">
        {stack.map((item, index) => {
            return <span className="px-2 py-1 bg-slate-100 rounded-full text-slate-800 font-medium"
                         key={item + index}>{item}</span>
        })}
    </div>
    <hr className="my-3 border-slate-200"/>
</div>

///////////////////GIT=HUb

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
</Card>