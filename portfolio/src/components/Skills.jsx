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
},{
    name: "GSAP", logo: GsapLogo, proficiency: 95
}, {
    name: "HTML", logo: HTMLLogo, proficiency: 95
}, {
    name: "CSS/CSS3", logo: CSSLogo, proficiency: 95
}, {
    name: "Sass", logo: SassLogo, proficiency: 95
}, {
    name: "Golang", logo: GolangLogo, proficiency: 80
},{
    name: "Database (MSQL, Postgres)", logo: DatabaseLogo, proficiency: 80
}, {
    name: "Docker", logo: DockerLogo, proficiency: 80
}, {
    name: "Git", logo: GitLogo, proficiency: 90
}, {
    name: "Postman", logo: PostmanLogo, proficiency: 95
}, {
    name: "Figma", logo: FigmaLogo, proficiency: 90
}, ]

export default function Skills() {
    return <div className="container mx-auto px-4 pt-4 w-full flex justify-between">
        <Card>
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
        </Card>
    </div>
}