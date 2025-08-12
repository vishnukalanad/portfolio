
export default function DataCard({title, value, sup}) {
    return<div className="mt-1">
        <p className="text-slate-500 text-xs">{title}</p>
        <p className="text-sm mt-1">{value} {sup && <span className="text-xs text-slate-500">{sup}</span>}</p>
    </div>
}