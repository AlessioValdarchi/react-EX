import React from "react";


export class ClickTracker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastButton: ''
        }
    }
    lastButtonPress = (event) => {
        let last = event.target.name;
        this.setState(() => {
            return { lastButton: last }
        })
    }

    render() {
        return (
            <div>
                <button name='button1' onClick={this.lastButtonPress}>button1</button>
                <button name="button2" onClick={this.lastButtonPress}>button2</button>
                <button name="button3" onClick={this.lastButtonPress}>button3</button>
                <h1>the last pressed button is:{this.state.lastButton}</h1>
            </div>
        )
    }
}