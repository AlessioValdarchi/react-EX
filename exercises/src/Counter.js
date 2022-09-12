import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

// export class Counter extends React.Component {
//     state = {
//         counter: 0
//     }


//     componentDidMount() {
//         setInterval((state) => {
//             this.setState(() => {
//                 return { counter: state.counter + this.props.incrAmount, }
//             })
//         }, this.props.incrTime);
//     }
export function Counter({ initialValue = 0, incr = 1, intervall = 5000 }) {

    const [counter, setCounter] = useState(initialValue);

    useEffect(() => {
        const timer = setInterval(() => setCounter((c) => c + incr), intervall);
        return () => {
            clearInterval(timer)

        }

    }, [initialValue, incr, intervall])

    return (
        <div>
            <CounterDisplay counter={counter} />
        </div>
    )
}
// chiedere a francesco il motivo del clear interval come unmount!!!


