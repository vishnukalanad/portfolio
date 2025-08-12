import {BsArrowUpRightCircleFill, BsLightningChargeFill} from "react-icons/bs";
import Button from "./Button.jsx";
import ReactLogo from "../assets/skills/react-svgrepo-com.svg";
import TailwindLogo from "../assets/skills/tailwind-svgrepo-com.svg";
import JSLogo from "../assets/skills/javascript-logo-svgrepo-com.svg";
import ReduxLogo from "../assets/skills/redux-logo-svgrepo-com.svg";
import GolangLogo from "../assets/skills/go-svgrepo-com.svg";
import HTMLLogo from "../assets/skills/html-5-svgrepo-com.svg";
import CSSLogo from "../assets/skills/css-3-svgrepo-com.svg";
import DatabaseLogo from "../assets/skills/database-svgrepo-com.svg";

const STACKS = {
    react: {
        logo: ReactLogo,
        title: "React",
    },
    tailwind: {
        logo: TailwindLogo,
        title: "Tailwind",
    },
    js: {
        logo: JSLogo,
        title: "JavaScript",
    },
    redux: {
        logo: ReduxLogo,
        title: "Redux",
    },
    golang: {
        logo: GolangLogo,
        title: "Golang",
    },
    html: {
        logo: HTMLLogo,
        title: "HTML",
    },
    css: {
        logo: CSSLogo,
    },
    psql: {
        logo: DatabaseLogo,
        title: "Database",
    },
}


export default function GithubProject({ project }) {
    function openLinksWithNewTab(url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }
    return<div className="bg-slate-100 p-2 rounded-lg" key={project.name}>
        <div className="flex items-center gap-2">
            <div
                className="relative h-10 w-10 bg-slate-200 rounded-lg flex flex-col items-center justify-center text-slate-500">
                {project.live && <div
                    className="absolute h-2 w-2 top-0 right-0 bg-emerald-600 rounded-md flex flex-col items-center justify-center animate-pulse-custom">
                </div>}
                {project.live && <div
                    className="absolute h-2 w-2 top-0 right-0 bg-emerald-600 rounded-md flex flex-col items-center justify-center">
                </div>}
                <BsLightningChargeFill className={`${project.live ? 'text-emerald-600' : 'text-slate-500'}`} />
                {project.live && <p className="text-xs text-emerald-600">Live</p>}
            </div>
            <div className="flex flex-col">
                <p className="text-sm">{project.name}</p>
                <div className="flex flex-wrap ml-1">
                    {project.stack.map(stack => {
                        return <div className="h-5 w-5 p-1 bg-white ring-1 ring-slate-100 rounded-full -ml-1 my-1" key={stack + Math.random() + "x"}>
                            <img src={STACKS[stack].logo} alt="logo" title={STACKS[stack].title} />
                        </div>
                    })}
                </div>
                {/*<a href={project.repo} className="text-emerald-800 text-xs" target="_blank"*/}
                {/*   rel="noreferrer">Open repo</a>*/}
            </div>

            <Button hover="hover:bg-emerald-200 hover:text-emerald-900" className={`transition duration-200 ml-auto`} onClick={() => {
                openLinksWithNewTab(project.repo)
            }}>
                <BsArrowUpRightCircleFill className="lg"/>
            </Button>
        </div>
    </div>
}