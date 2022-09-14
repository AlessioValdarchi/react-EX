import { useCounter } from "./useCounter";

export function HookCounter({ initialValue = 0 }) {
    const { counter, incrementHandler, decrementHandler, resetHandler } = useCounter(initialValue)

    return (
        <div>
            <h3>Count of clicks: {counter}</h3>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}