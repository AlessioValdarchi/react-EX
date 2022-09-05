import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        checkbox: false,
        disabled: true

    }
    inputOnChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        })

    }

    setDisabledButton = () => {
        if (this.state.username && this.state.password && this.state.disabled) {
            //enable it
            this.setState({
                disabled: false,
            })
        } else if ((!this.state.username || !this.state.password) && !this.state.disabled) {
            //disable it
            this.setState({
                disabled: true,
            })
        }
    }

    resetButton = () => {
        this.setState({
            username: '',
            password: '',
            checkbox: false,
            disabled: true
        })
    }

    render() {
        const myStyle = {
            backgroundColor: this.state.password.length < 8 ? 'red' : 'green'
        }

        this.setDisabledButton();
        return <div>
            <h1>Form Login</h1>
            <input name="username" value={this.state.username} onChange={this.inputOnChange} />
            <input name="password" type='password' value={this.state.password} onChange={this.inputOnChange} />
            <input name="checkbox" type='checkbox' checked={this.state.checkbox} onChange={this.inputOnChange} />
            <button name="login" disabled={this.state.disabled} onClick={() => this.props.onLogin(this.state)} style={myStyle}>Login</button>
            <button onClick={this.resetButton}>Reset</button>
        </div>
    }
}