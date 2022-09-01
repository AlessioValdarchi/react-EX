import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class ClickCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    incrCounter = () => {
        this.setState((state) => {
            return { counter: state.counter + this.props.incrAmount, }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrCounter}>Increment </button>
                <CounterDisplay counter={this.state.counter} />
            </div>
        )
    }
}

ClickCounter.defaultProps = {
    incrAmount: 1,

}