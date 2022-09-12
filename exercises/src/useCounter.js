import { useState } from "react"

export function useCounter() {
    const [counter, setCounter] = useState(0)

    function incrementHandler() {
        setCounter(state => {
            return state + 1
        })
    }
    function decrementHandler() {
        setCounter(state => {
            return state - 1
        })
    }
    function resetHandler() {
        setCounter(0)
    }


    return {
        counter,
        incrementHandler,
        decrementHandler,
        resetHandler
    }
}