import {useDispatch} from "react-redux";
import {userActions} from "../store/user.js";
import Button from "./Button.jsx";
import { BsFillXCircleFill } from "react-icons/bs";


export default function Modal({children}) {
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(userActions.closeModal())
    }
    return<div className="h-screen w-screen fixed z-50 backdrop-blur-sm backdrop-brightness-50">
        <dialog className="m-auto w-[95%] md:w-3/6 fixed inset-0 z-50 flex p-5 rounded-xl max-h-[90%] overflow-y-auto no-scrollbar">
            <div className="w-full">
                <div className="bg-white">
                    {children}
                </div>
                <div className="w-full flex justify-end mt-2 pb-2">
                    <Button hover="hover:bg-red-200 hover:text-red-900" onClick={closeModal} text={"Close"}>
                        <BsFillXCircleFill />
                    </Button>
                </div>
            </div>
        </dialog>
    </div>
}