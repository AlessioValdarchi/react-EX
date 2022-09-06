import React from "react";

export class Container extends React.Component {
    render() {
        const contStyle = {
            backgroundColor: 'white',
            border: '2px solid red'
        }
        return (
            <div style={contStyle}>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}