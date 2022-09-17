import useSWR from "swr"
const fetcher = fetch(url).then(response => response.json)
export function useGitHubUser(username) {
    const { data, error, loading = null, mutate } = useSWR(() => !username ? null : `https://api.github.com/users/${username}`, fetcher)

    return { data, error, loading, mutate }
}
