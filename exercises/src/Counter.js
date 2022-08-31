import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.initValue
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState((state) => {
                // return (
                //     (state.counter + this.props.incrAmount) > this.props.initValue * 10
                //         ? { counter: this.props.initValue }
                //         : { counter: state.counter + this.props.incrAmount })
                return (
                    { counter: state.counter + this.props.incrAmount }
                )

            })
        }, this.props.incrTime);
    }

    componentDidUpdate() {
        return (
            (this.state.counter) > this.props.initValue * 10
            && this.setState(() => {
                return { counter: this.props.initValue }
            })

        )
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
    incrTime: 500,
    initValue: 1,

}