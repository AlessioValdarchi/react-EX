import { useState } from "react";

export function LoginForm() {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,

    })

    function inputForm(event) {
        const { name, value, type, checked } = event.target;
        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function onReset(e) {
        e.preventDefault()
        setData({
            username: '',
            password: '',
            remember: false,
        }
        )
    }

    return (
        <form>
            <input onChange={inputForm} name="username" value={data.username}></input>
            <input onChange={inputForm} name="password" type='password' value={data.password}></input>
            <input onChange={inputForm} name="remember" type='checkbox' checked={data.remember}></input>
            <button name="disabled" disabled={data.username && data.password ? false : true}>Disabled</button>
            <button onClick={onReset}>Reset</button>
        </form>
    )
}