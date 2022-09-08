import { useState } from "react"

export function HookCounter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue);

    function incrementCounter() {
        setCounter((c) => c + 1)
    }

    function resetCounter() {
        setCounter(initialValue)
    }

    return <div>
        <h2>Counter:{counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
}