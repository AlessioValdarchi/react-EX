import React from "react";

export class Age extends React.Component {
    render() {
        return (<div>
            {this.props.age < 18
                ? <p>you are too young!</p>
                : <p>your age is {this.props.age}</p>}
        </div>
        )

    }
}