import {useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapScrollLine() {
    const lineRef = useRef(null);
    useEffect(() => {
        const line = lineRef.current;
        const lineLength = line.getTotalLength();

        line.style.strokeDasharray = lineLength;
        line.style.strokeDashoffset = lineLength;

        const animation = gsap.to(line, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
                trigger: line,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
            }
        })

        return () => {
            animation.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    }, [])
    return<svg width="100" height="200" xmlns="http://www.w3.org/2000/svg">
        <line
            ref={lineRef}
            x1="50"
            y1="0"
            x2="50"
            y2="200"
            stroke="black"
            strokeWidth="4"
        />
    </svg>
}