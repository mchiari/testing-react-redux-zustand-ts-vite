import React from 'react'
import { useStore } from './zustandStore'

export function ZustandCounter() {

    const { count, inc } = useStore()


    return (
        <div>
            <div>
                <button aria-label='Increment Value' onClick={inc}>Increment</button>
                <span role="contentinfo">{count}</span>
            </div>
        </div>
    )
}
