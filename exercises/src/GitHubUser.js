import { useGitHubUser } from "./useGitHubUser"

export function GitHubUser({ username }) {
    const { data, error, loading } = useGitHubUser(username)


    return (<div>
        {loading && <h4>loading...</h4>}
        {error && <h1>user not found</h1>}
        {data && <h4>user fetch by:{data.name}</h4>}
        {data &&
            !data.bio ? <p>Bio not aviable</p>
            : <p>Bio:{data.bio}</p>}


    </div>)
}