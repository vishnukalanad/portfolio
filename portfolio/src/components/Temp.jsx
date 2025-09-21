<img src={profilePic} alt="picsum"
     className="rounded-full h-28 w-28 content-center ring-2 ring-slate-400"/>
<div className="flex flex-col items-center gap-1 md:items-start">
    <div
        className="bg-emerald-100 w-fit rounded-full pr-3 pl-2 py-0.5  flex gap-2 items-center relative">
        <div className="relative flex items-center justify-center h-[6px] w-[6px]">
                            <span
                                className="absolute inline-flex h-full w-full rounded-full bg-emerald-700 opacity-75 animate-pulse-custom"></span>
            <div className="relative rounded-full h-[6px] w-[6px] bg-emerald-700"></div>
        </div>
        <p className="text-xs text-emerald-700">Actively Seeking</p>
    </div>

    <p className="mt-2 text-lg text-gray-900 font-normal transition-transform duration-200 animate-pop">Hi, I'm <span className="font-medium text-emerald-800">Vishnu Kalanad</span></p>
    <p className="text-sm text-slate-600">
        I’m a Senior Software Engineer with 4 years of professional experience working primarily with
        Angular, Reactjs, Golang, building clean, scalable applications — especially in finance and
        dashboard heavy products.
    </p>
    <div className="mt-3">
        <CurrentLocation country={"uae"} place={"Dubai"} />
    </div>
</div>


<hr className="border-slate-200"/>
<p className="mt-3 mb-1 text-emerald-800 font-medium transition-transform duration-200 animate-pop">Personal Details</p>
<div className="grid grid-cols-1 gap-2 md:grid-cols-3">
    {
        PERSONAL_DETAILS.map(data => (<div key={Math.random() + "x"}>
            <DataCard title={data.title} value={data.value} sup={data.sup} />
        </div>))
    }
</div>