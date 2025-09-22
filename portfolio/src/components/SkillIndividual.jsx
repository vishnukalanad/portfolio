import React from 'react';

function SkillIndividual({logo, title, proficiency}) {
    return (
        <div className="col-span-1  rounded-xl border border-slate-100 skill">
            <div className={"flex items-center justify-center p-2"}>
                <div className={"flex md:flex-col items-center gap-3"}>
                    <div className="flex items-center justify-center overflow-hidden w-12 h-12">
                        <img src={logo} alt="logo" className="w-12 h-12"/>
                    </div>
                    <p className={"text-sm font-medium text-center text-slate-600"}>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default SkillIndividual;