import { useEffect } from "react";

export default function useFetch(url) {
    async function LoadUrl(){
        console.log("Loading Url ", url);
        let response = await fetch(url);
        let json = await response.json();
        console.log("Data done ", json);
    };

    useEffect(() => {
        LoadUrl();
    }, []);
}