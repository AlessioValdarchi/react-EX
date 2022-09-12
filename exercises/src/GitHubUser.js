import { useGitHubUser } from "./useGitHubUser"

export function GitHubUser({ username }) {
    const { data, error } = useGitHubUser({ username })
    return (<div>
        {error ? <h1>user not found</h1>
            : <h4>user fetch by:{data.name}</h4>}
        {!data.bio ? <p>Bio not aviable</p>
            : <p>Bio:{data.bio}</p>}


    </div>)
}