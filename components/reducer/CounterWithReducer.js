"use client"
import { useReducer } from "react"
import counterReducer from "./CounterReducer"

const initialState = {
    count : 0
}
export default function CounterWithReducer () {
    const [state, dispatch] = useReducer(counterReducer, initialState)

    const incHandler = () => {
        dispatch({
            type: "INC" 
        });
    }; 

    const desHandler = () => {
        dispatch({
            type : "DEC"
        });
    };

    return (<div>
        <button type="button" 
                className="btn"
                onClick={incHandler}>+</button>
        Counter &nbsp;
        {
            state.count  
        }
        <button type="button" 
                className="btn"
                onClick={desHandler}>-</button>
    </div>)
}