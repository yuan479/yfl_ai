import { useEffect } from "react"
import { useRepoStore } from "../../store/repo"


const RepoList = () => {
    const { repos, loading, error, fetchRepos } = useRepoStore()
    useEffect(() => {
        fetchRepos()
    }, [])
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>


    return (
        <div>
            <h2>RepoList</h2>
            <ul>
                {
                    repos.map(repo => (
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
                            <p>{repo.description||'No description'}</p>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default RepoList