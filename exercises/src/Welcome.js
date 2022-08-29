import React from "react";
import { Age } from "./Age";
export const name = 'John'

export class Welcome extends React.Component {
    render() {
        return (
            (<div>
                <p>Welcome, {this.props.name}</p>
                {(this.props.age
                    && this.props.age < 65
                    && this.props.name === 'John')
                    && < Age age={this.props.age} />}
            </div>
            )
        )
    }
}
