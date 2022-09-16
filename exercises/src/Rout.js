import { Container } from './Container'
import { BrowserRouter } from 'react-router-dom'
import { AppRout } from './AppRout'
export function Rout() {
    return (
        <Container>
            <BrowserRouter>
                <AppRout />
            </BrowserRouter>
        </Container>
    )
}