
import Button from "./Button.jsx";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Card from "./Card.jsx";
import { BsLightningChargeFill } from "react-icons/bs";

export default function Navbar() {
    return<div className="container mx-auto px-4 pt-4 w-full flex justify-between">
        <Card>
            {/*<div className="flex gap-3">*/}
            {/*</div>*/}
            <p className="flex gap-2 items-center text-emerald-700"><BsLightningChargeFill /> Portfolio</p>
            <div className="flex gap-3">
                <Button hover="hover:bg-emerald-200 hover:text-emerald-900" text={"CV"}> <BsArrowDownCircleFill className="lg" /></Button>
                <Button hover="hover:bg-slate-300 hover:text-slate-900"> <BsGithub className="lg" /></Button>
                <Button hover="hover:bg-blue-200 hover:text-blue-900"> <BsLinkedin className="lg" /></Button>
            </div>
        </Card>
    </div>
}