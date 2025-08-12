export default function Button({children, p, textColor, hover, text, bg, className, ...props}) {
    return<button {...props} className={`rounded-full cursor-pointer ${p || 'p-2'} ${textColor || 'text-slate-600'} ${hover || ''} ${text && 'flex items-center justify-center gap-1 pr-3'} ${bg || 'bg-slate-200'} ${className || ''}`}>
        {children}
        {text && <p className="text-xs">{text}</p>}
    </button>
}