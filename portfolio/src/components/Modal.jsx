import {useDispatch} from "react-redux";
import {userActions} from "../store/user.js";

export default function Modal({children}) {
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(userActions.closeModal())
    }
    return<div className="h-screen w-screen fixed z-50 backdrop-blur-sm backdrop-brightness-50">
        <dialog className="m-auto w-[95%] md:w-1/3 fixed inset-0 z-50 flex p-5 rounded-xl max-h-[90%] overflow-y-auto">
            <div className="w-full">
                <div className="bg-white">
                    {children}
                </div>
                <div className="w-full flex justify-end">
                    <button className="" onClick={closeModal}>Close</button>
                </div>
            </div>
        </dialog>
    </div>
}