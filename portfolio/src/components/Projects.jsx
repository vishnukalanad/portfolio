import Card from "./Card.jsx";
import {BsClockFill} from "react-icons/bs";
import ProjectDetails from "./ProjectDetails.jsx";
import {InternRoleSummary, JuniorRoleSummary, SeniorRoleSummary} from "../constants/ProfessionalSummary.js";
import JobRole from "./JobRole.jsx";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";


gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // gsap.fromTo("#experience", {
        //     opacity: 0,
        //     marginTop: -100,
        // }, {
        //     opacity: 1,
        //     marginTop: 0,
        //     ease: "none",
        //     scrollTrigger: {
        //         trigger: "#experience",
        //         start: "top center",
        //         end: "+=100 top",
        //         scrub: true,
        //     }
        // });

        // gsap.fromTo("#jobTitles", {
        //     visibility: "none",
        //     background: "none"
        // }, {
        //     visibility: "visible",
        //     ease: "power2.inOut",
        //     scrollTrigger: {
        //         trigger: "#jobTitleTrigger",
        //         start: "top center",
        //         endTrigger: "#experience",
        //         end: "+=100 top",
        //         scrub: true,
        //     }
        // })
    });

    return <div
        className="container mx-auto px-2 w-full flex justify-center min-h-dvh bg-none relative"
         id={"experience"}>
        {/*<div className={"absolute top-0 w-full h-full bg-white"}></div>*/}
        <div className={"w-full h-1/2 z-10"}>
            <Card flex="_" bg={"bg-none"}>
                <div className={"p-2 clip"}>
                    <div  id={"title"} >
                        <p className={"uppercase text-xs font-semibold text-gray-700"}>Experience</p>
                        <p className={"text-2xl text-back font-semibold"}>The Journey That Shaped My Career</p>
                    </div>
                    <div className="flex flex-col gap-2 mt-3">

                        <div className={"w-full exp"}>
                            <JobRole role={"Senior Software Engineer (Frontend Heavy)"} date={"July 2024 - August 2025"}
                                     summary={SeniorRoleSummary}/>
                        </div>

                        <hr className={"my-4 border-slate-100"} />

                        <div className={"w-full exp"}>
                            <JobRole role={"Software Engineer"} date={"April 2022 - July 2024"}
                                     summary={JuniorRoleSummary}/>
                        </div>

                        <hr className={"my-4 border-slate-100 "} />

                        <div className={"w-full exp"}>
                            <JobRole role={"Software Engineer Intern"} date={"October 2021 - April 2022"}
                                     summary={InternRoleSummary}/>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
}