import React from "react";

export class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        setInterval(() => {
            this.setState((state) => {
                return { counter: this.state.counter + this.props.incrAmount, }
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