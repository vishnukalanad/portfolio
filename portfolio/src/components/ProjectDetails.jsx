import Button from "./Button.jsx";
import { BsEyeFill } from "react-icons/bs";
import {useDispatch} from "react-redux";
import {userActions} from "../store/user.js";

export default function ({title, description, clients, stack, keyPoints, index, ...props}) {
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(userActions.openModal())
    }
    return <div {...props}>
        <div className="text-sm flex flex-col items-start md:flex-row gap-2"><span className="text-xs rounded-full bg-yellow-800/25 px-3 py-0.5 font-medium">Project {index+1}</span> <span className="font-medium text-yellow-900">{title}</span></div>
        <p className="text-sm mt-2">{description}</p>
        <div className="flex gap-2 items-center justify-between mt-2 p-2 bg-slate-100 rounded-full">
            <p className="text-sm text-emerald-700 pl-2 font-medium">Contributions</p>
            <div className="flex gap-2 items-center ">
                <Button p="p-1" textColor="text-emerald-700" onClick={openModal} text={"See More"} hover="hover:bg-emerald-200 hover:text-emerald-900">
                    <BsEyeFill/>
                </Button>
            </div>
        </div>
        <p className="text-xs mt-3">{clients}</p>
        <div className="text-xs flex gap-2 mt-2">
            {stack.map((item, index) => {
                return <span className="px-2 py-1 bg-slate-200 rounded-full text-slate-700" key={item + index}>{item}</span>
            })}
        </div>
        <hr className="my-3 border-slate-200"/>
    </div>
}