import React from "react";
import { CounterButton } from "./CounterButton";
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
                <CounterButton incrCounter={this.incrCounter} />
                <CounterDisplay counter={this.state.counter} />
            </div>
        )
    }
}

ClickCounter.defaultProps = {
    incrAmount: 1,

}