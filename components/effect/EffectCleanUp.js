"use client";
import { useEffect, useState } from "react";

export default function EffectCleanUp() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        console.log("Effect fire");
        let timer = setInterval(() => {
            console.log("Set interval fired");
            setNow(new Date());
        }, 1000);
        return ()=> {
            console.log("clean Up");
            clearInterval(timer);
        };
    }, []);

    console.log("Render effect clean up");

    return (<div>
        Effect EffectCleanUp
        Time {now.toLocaleTimeString()}
    </div>)
}