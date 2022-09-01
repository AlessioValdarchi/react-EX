import { Hello } from "./Hello";
import React from "react";
import { Welcome, name } from "./Welcome";
//import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";

export class App extends React.Component {
    render() {
        return (<div>
            <Hello />
            <Welcome name={name} age={10} />
            <ClickCounter />
        </div>
        )
    }
}