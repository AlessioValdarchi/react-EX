import React from "react";
export const name = <strong>Alessio</strong>

export class Welcome extends React.Component {
    render() {
        return (<><p>Welcome, {this.props.name}</p>
            <p>your age is {this.props.age}</p></>
        )
    }
}
