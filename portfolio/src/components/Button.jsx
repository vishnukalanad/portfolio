export default function Button({children, p, textColor, hover, text, bg, ...props}) {
    return<button {...props} className={`rounded-full cursor-pointer ${p || 'p-2'} ${textColor || 'text-slate-600'} ${hover || ''} ${text && 'flex items-center justify-center gap-1 pr-3'} ${bg || 'bg-slate-200'}`}>
        {children}
        {text && <p className="text-xs">{text}</p>}
    </button>
}