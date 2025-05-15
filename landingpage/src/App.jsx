import BarraNavegacao from './components/BarraNavegacao/BarraNavegacao.jsx'
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container.js'

function App() {
  return (
    <>
      <div className='App'>
        <BarraNavegacao />
        <Container style={{maxWidth: 'none', margin: '0', padding: '0'}}>
          <Outlet />
        </Container>
        
      </div>
    </>
  )
}

export default App
