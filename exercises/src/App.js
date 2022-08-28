import { Hello } from "./Hello";
import React from "react";
import { Welcome, name } from "./Welcome";

export class App extends React.Component {
    render() {
        return (<div>
            <Hello />
            <Welcome name={name} age={28} />
        </div>
        )
    }
}