import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        username: '',
    }
    setUsername = (event) => {
        let value = event.target.value;
        this.setState(() => {
            return { username: value }
        })

    }

    render() {
        return <div>
            <input value={this.state.username} onChange={this.setUsername} />
            <Welcome name={this.state.username} />
        </div>

    }

}