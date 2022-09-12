
import { useEffect, useState } from "react";

export function GitHubUser({ username }) {
    const [data, SetData] = useState('')//chiedere tutor null stringa vuota

    async function fetchUserApi(username) {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json()
        console.log(json);
        SetData(() => { return json })
    }

    useEffect(() => {
        fetchUserApi(username)
    }, [username])

    return <div>
        <h4>user fetch by:{data.name}</h4>
        <p>Bio:{data.bio}</p>
    </div>
}