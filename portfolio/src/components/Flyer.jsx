import Card from "./Card.jsx";
import profilePic from "../assets/me.jpg"

export default function Flyer() {
    return <div className="container mx-auto px-4 pt-4 w-full flex justify-between">
        <Card>
            <div className="flex flex-col items-center gap-3 p-3 md:flex-row md:text-left">
                <img src={profilePic} alt="picsum"
                     className="rounded-full h-28 w-28 content-center border-2 border-gray-200"/>
                <div className="flex flex-col items-center gap-1 md:items-start">
                    <div className="bg-emerald-100 w-fit rounded-full pr-3 pl-2 py-0.5  flex gap-2 items-center relative">
                        <div className="relative flex items-center justify-center h-[6px] w-[6px]">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-700 opacity-75 animate-pulse-custom"></span>
                            <div className="relative rounded-full h-[6px] w-[6px] bg-emerald-700"></div>
                        </div>
                        <p className="text-xs text-emerald-700">Actively Seeking</p>
                    </div>

                    <p className="mt-2 text-lg text-gray-900 font-medium">Hi, I'm Vishnu Kalanad</p>
                    <p className="text-sm text-slate-600">
                        I’m a Senior Software Engineer with 4 years of professional experience working primarily with Angular, Reactjs, Golang, building clean, scalable applications — especially in finance and dashboard heavy products.
                    </p>
                </div>
            </div>
        </Card>
    </div>
}