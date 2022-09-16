import { useParams } from "react-router-dom"
import { GitHubUser } from "./GitHubUser"

export function RootGitHubUser() {
    const username = useParams()
    return (
        <GitHubUser username={username.username} />
    )
}