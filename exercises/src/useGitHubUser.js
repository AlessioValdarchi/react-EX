import { useEffect, useState } from "react";

export function useGitHubUser({ username }) {
    const [data, SetData] = useState('')//chiedere tutor null stringa vuota
    const [error, SetError] = useState(false)
    const [loading, SetLoading] = useState(true)

    async function fetchUserApi(username) {
        SetError(false);
        SetLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}`);
        try {
            if (response.ok) {
                const json = await response.json()
                console.log(json);
                SetData(() => { return json })
            }
            else {
                throw new Error('user not found')
            }
        }

        catch (e) {
            SetError(true)
            SetData(false)
        }
        finally {
            SetLoading(() => {
                return false
            })
        }
    }
    useEffect(() => {
        fetchUserApi(username)
    }, [username])

    return { data, error, loading, fetchUserApi }
}
