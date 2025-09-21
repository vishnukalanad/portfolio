export default function Button({children, p, textColor, hover, text, bg, className, ...props}) {
    return<button {...props} className={`rounded-2xl cursor-pointer ${p || 'px-3 py-2'} ${textColor || 'text-white'} ${hover || ''} ${text && 'flex items-center justify-center gap-1'} ${bg || 'bg-slate-700'} ${className || ''}`}>
        {children}
        {text && <p className="text-base">{text}</p>}
    </button>
}