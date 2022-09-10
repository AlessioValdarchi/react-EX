import { useEffect, useState } from "react"

export function HookCounter({ initialValue = 0, incrCount = 1 }) {
    const [counter, setCounter] = useState(initialValue);

    function incrementCounter() {
        setCounter((c) => c + incrCount)
    }

    const onCounterChange = () => {
        console.log(`the counter is${counter}`);
    };

    useEffect(onCounterChange, [counter])

    function resetCounter() {
        setCounter(0)
    }

    return <div>
        <h2>Counter:{counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
}