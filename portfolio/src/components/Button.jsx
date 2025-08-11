export default function Button({children, ...props}) {
    let classes = "bg-slate-200 text-slate-600 p-2 rounded-full cursor-pointer "
    if(props.className) {
        classes += " " + props.className
    }
    return<button className={classes}>
        {children}
    </button>
}