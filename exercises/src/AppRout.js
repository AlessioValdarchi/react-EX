import { Route, Routes } from "react-router-dom";
import { Welcome } from './Welcome'
export function AppRout() {
    return (
        <Routes>
            <Route path="/" element={<Welcome name={'Alessio'} />} />
        </Routes>
    )
}