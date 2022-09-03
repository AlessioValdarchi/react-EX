import React from "react";

export class UncontrolledLogin extends React.Component {
    _reference = React.createRef()
    onSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remeber = event.target.elements.remember.checked;


        console.log({
            username,
            password,
            remeber,

        });
    }
    componentDidMount() {
        document.querySelector('#loginButton').setAttribute('disabled', 'true')
        console.log('im did');
    }

    onDisabled = () => {
        !this._reference.current.username.value || !this._reference.current.password.value
            ? document.querySelector('#loginButton').setAttribute('disabled', 'true')
            : document.querySelector('#loginButton').removeAttribute('disabled')
        console.log('dis');
    }

    render() {
        return (
            <div>
                <h3>Uncontrolled Form</h3>
                <form ref={this._reference} onChange={this.onDisabled} onSubmit={this.onSubmit}>
                    <input name="username" />
                    <input name="password" type='password' />
                    <input name="remember" type='checkbox' />
                    <button type="submit" id="loginButton">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}