import { useReducer } from "react";
import counterReducer from "./CounterReducer";
import type { CounterState } from "./CounterReducer";

const Counter = () => {

    const initialState:CounterState = { count: 0 };

    // dispact digunakan untuk mengirimkan aksi ke reducer
    const [state, dispatch] = useReducer(counterReducer, initialState ); 


    return (
        <>
            <h1>Count : {state.count}</h1>
            <button onClick={() => dispatch({type:'increment', payload:1})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement', payload:1})}>Decrement</button>  
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
            <p>Counter using useReducer hook</p>
        </>
    )
}

export default Counter