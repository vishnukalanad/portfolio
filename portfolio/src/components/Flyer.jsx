import Card from "./Card.jsx";
import profilePic from "../assets/me.jpg"
import CurrentLocation from "./Location.jsx";
import {PERSONAL_DETAILS} from "../constants/PersonalDetails.js";
import DataCard from "./DataCard.jsx";
import Button from "./Button.jsx";
import {BsArrowDownCircleFill, BsGithub, BsLinkedin} from "react-icons/bs";
import {useState} from "react";

export default function Flyer() {
    const [notify, setNotifier] = useState(false);
    const [inject, setInject] = useState(false);

    const personalDetails = {
        name: "Vishnu Kalanad",
        title: "Software Engineer",
        location: "India",
        greet: function () {
            return "Hi, I'm " + this.name + ", A Software Engineer!";
        },
    }

    function handleCvDownload() {
        const link = document.createElement('a');
        link.href = '/assets/Vishnu_kalanad.pdf';  // path to your PDF in public/assets
        link.download = 'Vishnu_Kalanad.pdf';     // suggested filename for download
        link.click();
        setNotifier(true);

        setTimeout(() => {
            setInject(true);
            setTimeout(() => {
                setNotifier(false);
                setInject(false);
            }, 3000);
        }, 100);

    }

    function openLinksWithNewTab(url) {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    const greetMe = personalDetails.greet();
    return <div className="container mx-auto px-4 pt-4 w-full flex justify-between">
        <Card flex="_" bg={"bg-white"}>
            <div className="flex flex-col items-center gap-3 p-3 md:flex-row md:text-left">
                {/*<img src={profilePic} alt="profile pic" className="w-48 h-48 rounded-full"/>*/}
                <div className="flex flex-col gap-2">
                    <p className="text-emerald-800 text-5xl font-medium">{greetMe}</p>
                    {/*<p className="text-slate-500 text-lg">from <span className={"font-semibold"}>{personalDetails.location}</span></p>*/}
                    <p className="text-gray-500 text-base mt-2">
                        Front-End Engineer with 4 years of experience designing and deploying scalable multi-tenant applications.
                    </p>
                </div>
            </div>
            <div className="p-3 w-full flex flex-row gap-3">
                <Button
                    className={`transition-all duration-200 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
                    hover="hover:bg-emerald-200 hover:text-emerald-900" text={"Download CV"} onClick={handleCvDownload}>
                    <BsArrowDownCircleFill className="lg"/></Button>
                <Button hover="hover:bg-slate-300 hover:text-slate-900"
                        className={`transition duration-200 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
                        onClick={() => {
                            openLinksWithNewTab('https://github.com/vishnukalanad')
                        }}> <BsGithub className="lg"/></Button>
                <Button hover="hover:bg-blue-200 hover:text-blue-900"
                        className={`transition duration-200 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}
                        onClick={() => {
                            openLinksWithNewTab('https://www.linkedin.com/in/vishnukalanad/')
                        }}> <BsLinkedin className="lg"/></Button>
            </div>
            <hr className="my-3 border-slate-200" />
            <div className="flex flex-col gap-2 p-3">
                <p className="text-slate-600 text-xl">About Me</p>
                <p className="text-slate-500 text-base">
                    Proven track record
                    in leading enterprise projects, including a CBDC support portal for major banks. Skilled in integrating REST APIs, streamlining workflows, and
                    driving efficiency improvements.
                    Expertise in Angular, TypeScript, and JavaScript, with a focus on delivering innovative, high-performance
                    solutions.
                </p>
            </div>
        </Card>
    </div>
}