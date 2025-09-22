import Button from "./Button.jsx";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Card from "./Card.jsx";
import { BsLightningChargeFill } from "react-icons/bs";
import {useState} from "react";

export default function Navbar() {
    const [notify, setNotifier] = useState(false);
    const [inject, setInject] = useState(false);

    // function openLinksWithNewTab(url) {
    //     const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    //     if (newWindow) newWindow.opener = null;
    // }

    // function handleCvDownload(){
    //     const link = document.createElement('a');
    //     link.href = '/assets/Vishnu_kalanad.pdf';  // path to your PDF in public/assets
    //     link.download = 'Vishnu_Kalanad.pdf';     // suggested filename for download
    //     link.click();
    //     setNotifier(true);
    //
    //     setTimeout(() => {
    //         setInject(true);
    //         setTimeout(() => {
    //             setNotifier(false);
    //             setInject(false);
    //         }, 3000);
    //     }, 100);
    //
    // }
    return<div className="container mx-auto px-4 pt-4 w-full ">
        {/*<Card className={`transition relative ${notify ? 'bg-emerald-800' : 'bg-white'}`} bg={'_'} >*/}
        {/*    <p className={`flex gap-2 items-center text-emerald-700 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}><BsLightningChargeFill/> vi.sh | Portfolio</p>*/}
        {/*        {*/}
        {/*            inject && <p className={`text-white text-center w-full m-0 transition duration-200 absolute left-0 ${notify ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`}>Thank*/}
        {/*                you for downloading!</p>}*/}
        {/*    <div className="flex items-center gap-3">*/}
        {/*        <Button className={`transition-all duration-200 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`} hover="hover:bg-emerald-200 hover:text-emerald-900" text={"CV"} onClick={handleCvDownload}>*/}
        {/*            <BsArrowDownCircleFill className="lg"/></Button>*/}
        {/*        <Button hover="hover:bg-slate-300 hover:text-slate-900" className={`transition duration-200 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`} onClick={() => {*/}
        {/*            openLinksWithNewTab('https://github.com/vishnukalanad')*/}
        {/*        }}> <BsGithub className="lg"/></Button>*/}
        {/*        <Button hover="hover:bg-blue-200 hover:text-blue-900" className={`transition duration-200 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`} onClick={() => {*/}
        {/*            openLinksWithNewTab('https://www.linkedin.com/in/vishnukalanad/')*/}
        {/*        }}> <BsLinkedin className="lg"/></Button>*/}
        {/*    </div>*/}
        {/*</Card>*/}
    </div>
}