// Cria a lista de rotas com o Router Dom
import { createBrowserRouter } from "react-router-dom"

// Importação das páginas
import App from './App.jsx'
import PaginaErro from './pages/PaginaErro.jsx'
import LandingPage from './pages/LandingPage.jsx'
import SobreSenai from "./pages/SobreSenai/SobreSenai.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <PaginaErro />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
            {
                path: "/inicio",
                element: <LandingPage />
            },
            {
                path: "/sobre",
                element: <SobreSenai />
            }
        ]
    }
])

export default router;