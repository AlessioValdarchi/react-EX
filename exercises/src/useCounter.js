import { useCallback, useState } from "react"

export function useCounter({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue)

    const incrementHandler = useCallback(function incrementHandler() {
        setCounter(state => {
            return state + 1
        })
    }, [])

    const decrementHandler = useCallback(function decrementHandler() {
        setCounter(state => {
            return state - 1
        })
    }, [])

    const resetHandler = useCallback(function resetHandler() {
        setCounter(initialValue)
    }, [])


    return {
        counter,
        incrementHandler,
        decrementHandler,
        resetHandler
    }
}