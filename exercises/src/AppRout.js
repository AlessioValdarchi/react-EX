import { Route, Routes } from "react-router-dom";
import { Welcome } from './Welcome'
import { Counter } from './Counter'
export function AppRout() {
    return (
        <Routes>
            <Route path="/" element={<Welcome name={'Alessio'} />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
    )
}