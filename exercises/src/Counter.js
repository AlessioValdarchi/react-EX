import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        counter: 0
    }
    constructor(props) {
        super(props)
        setInterval(() => {
            this.setState((state) => {
                return { counter: state.counter + this.props.incrAmount, }
            })
        }, this.props.incrTime);
    }


    render() {
        return (
            <div>
                <CounterDisplay counter={this.state.counter} />
            </div>
        )
    }
}

Counter.defaultProps = {
    incrAmount: 2,
    incrTime: 500
}