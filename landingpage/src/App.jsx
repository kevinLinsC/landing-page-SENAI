import React from "react";

import BarraNavegacao from './components/BarraNavegacao/BarraNavegacao.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/esm/Container.js'

import { AuthProvider } from './components/contexts/UserContext.jsx'

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <div className='App'>
          <BarraNavegacao />
          <Container style={{maxWidth: 'none', margin: '0', padding: '0'}}>
            <Outlet />
          </Container>
          <Footer />
        </div>
      </AuthProvider>  
    </React.StrictMode>
  )
}

export default App
