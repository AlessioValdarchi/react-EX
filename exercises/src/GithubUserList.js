import { useState } from "react"
import { GitHubUser } from "./GitHubUser"

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
        {userList.map((item) => {
            return <GitHubUser username={item} />
        })}

    </div>
}