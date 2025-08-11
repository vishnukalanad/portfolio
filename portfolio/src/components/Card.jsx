export default function Card({children}) {
    return<div className="card flex items-center justify-between gap-3 w-full bg-white p-2 rounded-xl">
        { children}
    </div>
}