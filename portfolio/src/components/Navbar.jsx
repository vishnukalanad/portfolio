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
    function handleCvDownload(){
        const link = document.createElement('a');
        link.href = '/assets/Vishnu_kalanad.pdf';  // path to your PDF in public/assets
        link.download = 'Vishnu_Kalanad.pdf';     // suggested filename for download
        // link.click();
        setNotifier(true);

        setTimeout(() => {
            setInject(true);
            setTimeout(() => {
                setNotifier(false);
                setInject(false);
            }, 3000);
        }, 100);

    }
    return<div className="container mx-auto px-4 pt-4 w-full flex justify-between">
        <Card className={`transition duration-200 ease-in ${notify ? 'bg-emerald-800' : 'bg-white'}`} bg={'_'}>
            {/*<div className="flex gap-3">*/}
            {/*</div>*/}
            <p className={`flex gap-2 items-center text-emerald-700 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}><BsLightningChargeFill/> Portfolio</p>
            <div className="flex items-center gap-3">
                {
                    inject && <p className={`text-white text-center w-full m-0 transition duration-200 ${notify ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`}>Thank
                        you for downloading!</p>}
                <Button className={`transition-all duration-200 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`} hover="hover:bg-emerald-200 hover:text-emerald-900" text={"CV"} onClick={handleCvDownload}>
                    <BsArrowDownCircleFill className="lg"/></Button>
                <Button hover="hover:bg-slate-300 hover:text-slate-900" className={`transition duration-200 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}> <BsGithub className="lg"/></Button>
                <Button hover="hover:bg-blue-200 hover:text-blue-900" className={`transition duration-200 ${notify ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}> <BsLinkedin className="lg"/></Button>
            </div>
        </Card>
    </div>
}