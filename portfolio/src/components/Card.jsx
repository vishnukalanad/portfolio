
export default function Card({children, p, flex, bg, r, className, id}) {
    return<div id={id} className={`gap-3 w-full ${bg || 'bg-white'} ${r || 'rounded-xl'} ${p || 'p-2'} ${flex || 'flex items-center justify-between'} ${className}`}>
        { children}
    </div>
}