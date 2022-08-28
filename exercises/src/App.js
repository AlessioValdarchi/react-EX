import { Hello } from "./Hello";
import React from "react";
import { Welcome } from "./Welcome";

export class App extends React.Component {
    render() {
        return (<div>
            <Hello />
            <Welcome name='Alessio' age={28} />
        </div>
        )
    }
}