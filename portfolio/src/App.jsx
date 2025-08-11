import './App.css'
import Navbar from "./components/Navbar.jsx";
import Flyer from "./components/Flyer.jsx";
import Projects from "./components/Projects.jsx";

function App() {
    // const gradient = "bg-gradient-to-b from-black to-blue-900";
    return (
        <main className="min-h-screen relative bg-slate-200 ">
            <div className="absolute inset-0 h-fit w-full
            bg-[radial-gradient(circle,#d2d9df_1px,transparent_1px)]
            bg-[length:16px_16px]">

                <div className="container w-[95%] lg:w-1/2 mx-auto">
                    <Navbar/>
                    <Flyer/>
                    <Projects/>
                </div>
            </div>
        </main>
    )
}

export default App
