import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

export function GithubUserList() {
    const [userList, SetUserList] = useState([])
    const [username, SetUsername] = useState('')
    function inputOnChange(event) {
        SetUsername(() => { return event.target.value })
    }

    function adduserInput() {
        SetUserList((prev) => { return [...prev, username] })
        SetUsername(() => { return '' })
    }
    return <div>
        <input name="username" value={username} onChange={inputOnChange} />
        <button onClick={adduserInput}>Add User</button>
        <ul>
            {userList.map((item, index) => {
                return (
                    <li key={item + index}><Link to={`/users/${item}`}>{item}</Link></li>
                )
            })}
        </ul>
        <Outlet />
    </div>
}