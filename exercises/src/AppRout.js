import { Route, Routes, Link } from "react-router-dom";
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { RootGitHubUser } from './RootGitHubUser'
import { GithubUserList } from "./GithubUserList";
export function AppRout() {
    return (<div>
        <h3>Navigate to:</h3>
        <p><Link to={"/"}>Home</Link> | <Link to={"counter"}>Counter</Link> | <Link to={"/AlessioValdarchi"}>My Github</Link></p>
        <Routes>
            <Route path="/" element={<Welcome name={'Alessio'} />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="*" element={<h3>Page not found</h3>} />
            <Route path="/users" element={<GithubUserList />} >
                <Route path=":username" element={<RootGitHubUser />} />
            </Route>
        </Routes>
    </div>
    )
}