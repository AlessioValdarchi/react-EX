import React from "react";

export class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        setInterval(() => {
            this.setState((state) => {
                return { counter: this.state.counter + 1, }
            })
        }, 1000);
    }


    render() {
        return (
            <div>
                <h1>Count:{this.state.counter}</h1>
            </div>
        )
    }
}