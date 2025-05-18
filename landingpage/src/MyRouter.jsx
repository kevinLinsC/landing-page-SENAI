// Cria a lista de rotas com o Router Dom
import { createBrowserRouter } from "react-router-dom"

// Importação das páginas
import App from './App.jsx'
import PaginaErro from './pages/PaginaErro.jsx'
import LandingPage from './pages/LandingPage.jsx'
import SobreSenai from "./pages/SobreSenai/SobreSenai.jsx"
import DetalhesCurso from "./pages/DetalhesCurso.jsx"
import FaleConosco from "./pages/FaleConosco/FaleConosco.jsx"
import Login from "./pages/Login/Login.jsx"
import CadastrarUsuario from "./pages/CadastrarUsuario/CadastrarUsuario.jsx"

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
            },
            {
                path: "/detalhe-curso/:id",
                element: <DetalhesCurso />
            },
            {
                path: "/fale-conosco",
                element: <FaleConosco />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/cadastrar-usuario",
                element: <CadastrarUsuario />
            }
        ]
    }
])

export default router;