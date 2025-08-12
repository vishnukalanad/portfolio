import './App.css'
import Navbar from "./components/Navbar.jsx";
import Flyer from "./components/Flyer.jsx";
import Projects from "./components/Projects.jsx";
import {useSelector} from "react-redux";
import Modal from "./components/Modal.jsx";
import ProjectDetailsModalLayout from "./components/ProjectDetailsModalLayout.jsx";
import {MODAL_TYPES} from "./store/user.js";
import Skills from "./components/Skills.jsx";
import GsapScrollLine from "./components/GsapScrollLine.jsx";
import GithubProjects from "./components/GithubProjects.jsx";

function App() {
    const modalOpen = useSelector(state => state.user.modalOpen)
    const modalType = useSelector(state => state.user.modalType)

    return (
        <main className="min-h-screen
    relative
    bg-slate-200
    bg-[radial-gradient(circle,#d2d9df_1px,transparent_1px)]
    bg-[length:16px_16px] ">
            {modalOpen && <Modal>
                {modalType === MODAL_TYPES.PROJECT && <ProjectDetailsModalLayout/>}
                {modalType === MODAL_TYPES.INFORMATION && <div>Other modal</div>}
            </Modal>}

            <div className="container w-[95%] lg:w-1/2 mx-auto">

                <Navbar/>
                <Flyer/>
                <Skills />
                <Projects/>
                <GithubProjects/>
            </div>
        </main>
    )
}

export default App
