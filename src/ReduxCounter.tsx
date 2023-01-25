import React from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { decrement, increment } from "./store";


export function ReduxCounter() {
    const count = useAppSelector(store => store.counter.value)
    const dispatch = useAppDispatch()


    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >Increment</button>
                <span role="contentinfo">{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(decrement())}
                >Decrement</button>
            </div>
        </div>
    )
}