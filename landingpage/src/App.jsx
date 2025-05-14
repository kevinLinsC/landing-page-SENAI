import BarraNavegacao from './components/BarraNavegacao/BarraNavegacao.jsx'
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container"

function App() {
  return (
    <>
      <div className='App'>
        <BarraNavegacao />
        <Outlet />
      </div>
    </>
  )
}

export default App
