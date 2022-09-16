import { Route, Routes } from "react-router-dom";
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { RootGitHubUser } from './RootGitHubUser'
export function AppRout() {
    return (
        <Routes>
            <Route path="/" element={<Welcome name={'Alessio'} />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/:username" element={<RootGitHubUser />} />
        </Routes>
    )
}