export default function ({title, description, clients, stack, keyPoints, ...props}) {
    return <div {...props}>
        <p className="text-sm ">{title}</p>
        <p className="text-sm">{description}</p>
        <hr className="my-2 border-slate-200"/>
        <p className="text-sm text-emerald-700">Contributions</p>
        <div className="mt-2">
            <ol className="list-disc list-inside">
                {keyPoints.map((item, index) => {
                    return <li className="text-sm" key={index + Math.random()}>{item}</li>
                })}
            </ol>
        </div>
        <p className="text-xs">{clients}</p>
        <div className="text-xs flex gap-2 mt-2">
            {stack.map((item, index) => {
                return <span className="px-2 py-1 bg-slate-200 rounded-full text-slate-700" key={item + index}>{item}</span>
            })}
        </div>
    </div>
}