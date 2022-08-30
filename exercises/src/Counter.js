import React from "react";

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
                <h1>Count:{this.state.counter}</h1>
            </div>
        )
    }
}

Counter.defaultProps = {
    incrAmount: 2,
    incrTime: 5000
}