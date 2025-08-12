export default function Card({children, p, flex}) {
    return<div className={`card gap-3 w-full bg-white rounded-xl ${p || 'p-2'} ${flex || 'flex items-center justify-between'}`}>
        { children}
    </div>
}