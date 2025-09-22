import './App.css'
import Navbar from "./components/Navbar.jsx";
import Flyer from "./components/Flyer.jsx";
import Projects from "./components/Projects.jsx";
import {useSelector} from "react-redux";
import Modal from "./components/Modal.jsx";
import ProjectDetailsModalLayout from "./components/ProjectDetailsModalLayout.jsx";
import {MODAL_TYPES} from "./store/user.js";
import Skills from "./components/Skills.jsx";
import { Analytics } from "@vercel/analytics/react"
import GithubProjects from "./components/GithubProjects.jsx";
import Footer from "./components/Footer.jsx";
import Education from "./components/Education.jsx";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

function App() {
    const modalOpen = useSelector(state => state.user.modalOpen)
    const modalType = useSelector(state => state.user.modalType)

    return (
        <main className="min-h-screen overflow-y-hidden
    relative
    bg-white ">
            {modalOpen && <Modal>
                {modalType === MODAL_TYPES.PROJECT && <ProjectDetailsModalLayout/>}
                {modalType === MODAL_TYPES.INFORMATION && <div>Other modal</div>}
            </Modal>}

            <div className={"bg-slate-100"}>
                <div className="container w-[95%] lg:w-1/2 mx-auto">
                    <Flyer/>
                </div>
            </div>

            <div className={"bg-slate-50"}>
                <div className="container w-[95%] lg:w-1/2 mx-auto">
                    <Education />
                </div>
            </div>
            <div className={"bg-slate-100 py-20 my:py-0"}>
                <div className="container w-[95%] lg:w-1/2 mx-auto">
                    <Skills/>
                </div>
            </div>
            <div className={"bg-slate-50 py-20"}>
                <div className="container w-[95%] lg:w-1/2 mx-auto">
                    <Projects />
                </div>
            </div>
            <div className="container w-[95%] lg:w-1/2 mx-auto pt-20">
                <GithubProjects/>
            </div>
            <div className="container w-[95%] lg:w-1/2 mx-auto">
                <Footer/>
            </div>
            <Analytics />
        </main>
    )
}

export default App
