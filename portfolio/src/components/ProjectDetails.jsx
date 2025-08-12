import {useDispatch} from "react-redux";
import {userActions} from "../store/user.js";
import {BsArrowUpRightCircleFill} from "react-icons/bs";


export default function ({title, description, clients, stack, keyPoints, complete, index, ...props}) {
    const dispatch = useDispatch();
    const openDetails = (data) => {
        dispatch(userActions.openProjectData(data))
    }
    return <div style={{cursor: "pointer"}} {...props} onClick={() => {
            openDetails(complete)
        }}>
        <div className="text-sm flex flex-col items-start md:flex-row gap-2 ">
            <span className="text-xs rounded-full bg-yellow-800/25 px-3 py-0.5 font-medium">Project {index + 1}</span>
            <p className="font-medium text-yellow-900 hover:text-yellow-700 hover:underline flex items-center gap-2">{title} <BsArrowUpRightCircleFill className="text-yellow-900 text-xs"/></p>
        </div>
        <div className="bg-slate-100 p-2 rounded-lg mt-2 md:mt-3">
            <p className="text-sm text-slate-600 font-normal">{description}</p>
        </div>
        <div className="text-xs flex flex-col text-center gap-2 mt-3 md:flex-row">
            {stack.map((item, index) => {
                return <span className="px-2 py-1 bg-slate-100 rounded-full text-slate-800 font-medium"
                             key={item + index}>{item}</span>
            })}
        </div>
        <hr className="my-3 border-slate-200"/>
    </div>
}