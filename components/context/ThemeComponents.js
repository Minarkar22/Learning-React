"use client";

import { useContext, useState } from "react"
import { ThemeContext } from "./ThemeContext"

function GrandChild () {
    const context = useContext(ThemeContext);
    console.log("Child ", context);
    return (<div style={context}>
        Grand Child
    </div>)
}

function Child (){
    return (<div>
        Theme Child
        <GrandChild/>
    </div>)
}

function Parent () {
    return (<div>
        Theme Parent
        <Child/>
    </div>)
}

export default function ThemeComponents() {
    const [theme, setTheme] = useState({
        color : "yellow"
    });

    const btnChangeTheme = () => {
        setTheme({
            color: 'blue'
        });
    };
    return (<div>
        Theme Component
        <button type="button" 
                className="border rounded-md bg-cyan-600 text-white"
                onClick={btnChangeTheme}>Change</button>
        <ThemeContext.Provider value={theme}>
            <Parent/>
        </ThemeContext.Provider>
        
    </div>)
}