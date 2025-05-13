import BarraNavegacao from './components/BarraNavegacao/BarraNavegacao.jsx'
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container"

function App() {
  return (
    <>
      <div className='App'>
        <BarraNavegacao />
        {/* Tirei o margin e o padding só para conseguir mudar manualmente  */}
        <Outlet />
      </div>
    </>
  )
}

export default App
