import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {

<<<<<<< HEAD
    state = {
        counter: 0
=======
    state={
        counter:0
>>>>>>> 126b46236bb25db6f5ec955cfa8b484ac783c25c
    }

    componentDidMount() {
        setInterval((state) => {
            this.setState(() => {
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
