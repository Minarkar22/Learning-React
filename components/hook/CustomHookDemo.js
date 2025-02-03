"use client";
import useFetch from "./useFetch";


export default function CustomHookDemo() {
    useFetch('https://jsonplaceholder.typicode.com/todos');

    return(<div>
        Custom hook
    </div>)
}