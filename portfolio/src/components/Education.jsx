import React from 'react';
import education from "../assets/education.jpg"
import {FaGraduationCap} from "react-icons/fa";
import {FaClock, FaLocationPin} from "react-icons/fa6";

function Education(props) {
    return (
        <div className={"container mx-auto px-4 pt-4 w-full min-h-dvh/2 flex justify-between items-center"}>
            <div className={"p-2"}>

                <p className={"uppercase text-xs font-semibold text-slate-700 pt-4"}>education</p>
                <p className={"text-4xl text-slate-800 font-semibold"}>Academic Journey</p>
                <p className={"text-slate-700 text-lg mt-2"}>A snapshot of my academic background and the foundation that
                    shaped my journey into software development.</p>
                <div className={"relative mt-3 w-full h-60 overflow-hidden rounded-2xl flex items-center justify-center"}>
                    <img src={education} alt="education" className={"object-center"}/>
                    <div className={"absolute w-full h-full bg-black/50 z-1"}></div>
                    <div className={"absolute z-2 flex flex-col items-start gap-2 w-[95%] p-2"}>
                        <span className={"text-3xl text-slate-800 bg-slate-100 rounded-full p-2"}>
                            <FaGraduationCap/>
                        </span>
                        <div>
                            <p className={"text-white text-xl font-semibold"}>Bachelor of Technology (B.Tech)</p>
                            <p className={"text-sm text-white"}>in <span className={"font-medium"}>Computer Science Engineering</span> from <span className={"font-medium"}>APJ Abdul Kalam Technological University</span></p>
                            <div className={"flex flex-col gap-1 mt-2"}>
                                <p className={"text-sm text-white font-semibold flex items-center gap-1"}><FaLocationPin/> Kerala, India</p>
                                <p className={"text-sm text-white font-semibold flex items-center gap-1"}><FaClock/> 2017-21</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;