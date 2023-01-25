import React, { useState } from 'react'

export const Counter: React.FunctionComponent = () => {
    const [counter, setCounter] = useState(0)


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Add one</button>
            <div role="contentinfo">Counter is at: {counter}</div>
        </div>
    )
}
