import Card from "./Card.jsx";
import { BsClockFill } from "react-icons/bs";
import ProjectDetails from "./ProjectDetails.jsx";
import {InternRoleSummary, JuniorRoleSummary, SeniorRoleSummary} from "../constants/ProfessionalSummary.js";
import JobRole from "./JobRole.jsx";

export default function Projects() {
    return<div className="container mx-auto px-4 pt-4 w-full flex justify-between">
        <Card p={"p-3 px-4"} flex="_">
            <p className="text-emerald-800 font-medium">Professional Summary</p>
            <ol className="relative md:border-s-2 md:border-slate-200 mt-3 md:m-3">
                {/*Senior role*/}
                <JobRole role={"Senior Software Engineer"} date={"July 2024 - August 2025"} summary={SeniorRoleSummary}/>

                {/*Junior Role*/}
                <JobRole role={"Software Engineer"} date={"April 2022 - July 2024"} summary={JuniorRoleSummary}/>

                {/*Intern Role*/}
                <JobRole role={"Software Engineer Intern"} date={"October 2021 - April 2022"} summary={InternRoleSummary}/>
            </ol>
            <div className="mt-3 text-sm text-slate-500 bg-slate-100 p-2 rounded-lg">
                <p className="px-2"><span className="font-medium">Phew 😮‍💨</span> that was a lot! Just a glimpse into the exciting journey so far — there’s always more to learn and build!</p>
            </div>
        </Card>
    </div>
}