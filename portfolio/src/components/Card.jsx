
export default function Card({children, p, flex, bg, className}) {
    return<div className={`gap-3 w-full ${bg || 'bg-white'} rounded-xl ${p || 'p-2'} ${flex || 'flex items-center justify-between'} ${className}`}>
        { children}
    </div>
}