import { useEffect, useState } from "react"

export function HookCounter(props) {
    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter((c) => c + 1)
    }

    useEffect(() => {
        props.onCounterChange(counter);
    }, [counter, props])

    function resetCounter() {
        setCounter(0)
    }

    return <div>
        <h2>Counter:{counter}</h2>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={resetCounter}>Reset</button>
    </div>
}