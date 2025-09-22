import HTMLLogo from "../assets/skills/html-5-svgrepo-com.svg"
import CSSLogo from "../assets/skills/css-3-svgrepo-com.svg"
import JSLogo from "../assets/skills/javascript-logo-svgrepo-com.svg"
import ReactLogo from "../assets/skills/react-svgrepo-com.svg"
import TypeScriptLogo from "../assets/skills/typescript-icon-svgrepo-com.svg"
import DockerLogo from "../assets/skills/docker-svgrepo-com.svg"
import ReduxLogo from "../assets/skills/redux-logo-svgrepo-com.svg"
import TailwindLogo from "../assets/skills/tailwind-svgrepo-com.svg"
import SassLogo from "../assets/skills/sass-svgrepo-com.svg"
import GitLogo from "../assets/skills/git-svgrepo-com.svg"
import PostmanLogo from "../assets/skills/postman-icon-svgrepo-com.svg"
import GolangLogo from "../assets/skills/go-svgrepo-com.svg"
import AngularLogo from "../assets/skills/angular-svgrepo-com.svg"
import FigmaLogo from "../assets/skills/figma-svgrepo-com.svg"
import DatabaseLogo from "../assets/skills/database-svgrepo-com.svg"
import Card from "./Card.jsx";
import GsapLogo from "../assets/skills/gsap-logo.svg";
import SkillIndividual from "./SkillIndividual.jsx";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/all";


const SKILLS = [{
    name: "Angular", logo: AngularLogo, proficiency: 95
}, {
    name: "React", logo: ReactLogo, proficiency: 95
}, {
    name: "JavaScript", logo: JSLogo, proficiency: 95
}, {
    name: "TypeScript", logo: TypeScriptLogo, proficiency: 95
}, {
    name: "Redux", logo: ReduxLogo, proficiency: 90
}, {
    name: "Tailwind", logo: TailwindLogo, proficiency: 95
}, {
    name: "GSAP", logo: GsapLogo, proficiency: 95
}, {
    name: "HTML", logo: HTMLLogo, proficiency: 95
}, {
    name: "CSS/CSS3", logo: CSSLogo, proficiency: 95
}, {
    name: "Sass", logo: SassLogo, proficiency: 95
}, {
    name: "Golang", logo: GolangLogo, proficiency: 80
}, {
    name: "Databases", logo: DatabaseLogo, proficiency: 80
}, {
    name: "Docker", logo: DockerLogo, proficiency: 80
}, {
    name: "Git", logo: GitLogo, proficiency: 90
}, {
    name: "Postman", logo: PostmanLogo, proficiency: 95
}, {
    name: "Figma", logo: FigmaLogo, proficiency: 90
},]

export default function Skills() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // gsap.fromTo(".skill", {
        //         scale: 0,
        //         opacity: 0,
        //     }, {
        //         scale: 1,
        //         opacity: 1,
        //         ease: "power3.inOut",
        //         scrollTrigger: {
        //             trigger: "#skills",
        //             start: "top center",
        //             end: "bottom bottom",
        //             scrub: true,
        //         }
        //     }
        // )

        // gsap.fromTo("#card", {
        //     // scale: 1.2,
        //     opacity: 0
        // }, {
        //     // scale: 1,
        //     opacity: 1,
        //     ease: "power2.inOut",
        //     scrollTrigger: {
        //         trigger: "#skills", start: "top center",
        //         end: "center center",
        //         scrub: true,
        //     }
        // })
        //
        // gsap.to("#skills", {
        //     opacity: 0,
        //     ease: "power2.inOut",
        //     scrollTrigger: {
        //         trigger: "#skills",
        //         start: "center 100",
        //         endTrigger: "#experience",
        //         end: "top center",
        //         scrub: true,
        //     }
        // })
    })
    return <div className="container mx-auto px-2 w-full flex justify-between items-center min-h-dvh" id={"skills"}>
        <Card flex="_" id={"card"}>
            <div className={"flex flex-col gap-1 w-full p-2"}>
                <p className={"uppercase text-xs font-semibold text-slate-700"}>skills</p>
                <p className={"text-2xl text-slate-800 font-semibold"}>What are my skills?</p>
                <p className={"text-base text-slate-500"}>I build clean, responsive, and user-friendly interfaces that
                    streamline workflows and enhance user productivity.</p>
            </div>
            <div className={"grid grid-cols-1 gap-2 mt-3 md:grid-cols-6 p-2"}>
                {
                    SKILLS.map(skill => {
                        return <SkillIndividual logo={skill.logo} title={skill.name} proficiency={skill.proficiency}
                                                key={skill.name + Math.random() + "x"}/>
                    })
                }
            </div>
            {/*<hr className="mt-3 border-slate-200" />*/}
        </Card>
    </div>
}