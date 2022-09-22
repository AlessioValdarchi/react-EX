import { useGitHubUser } from "./useGitHubUser"

export function GitHubUser({ username }) {
    const { data, error, loading, fetchUserApi } = useGitHubUser({ username })

    function GetUserGitHub() {
        fetchUserApi(username)
    }

    return (<div>
        {loading && <h4>loading...</h4>}
        {!loading && error && <h1>user not found</h1>}
        {!loading && data && <h4>user fetch by:{data.name}</h4>}
        {!loading && data &&
            !data.bio ? <p>Bio not aviable</p>
            : <p>Bio:{data.bio}</p>}


    </div>)
}