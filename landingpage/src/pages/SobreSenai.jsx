import React from 'react'
import Objetivos from '../components/SobreSenai/Objetivos.jsx'
import Surgimento from '../components/SobreSenai/Surgimento.jsx'
import Evolucao from '../components/SobreSenai/Evolucao.jsx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SobreSenai = () => {
  return (
    <div className='m-auto'>
      <Row>
        <Col xs={12} md={12} style={{margin: '0px', padding: '0px'}}>
          <Objetivos />
          <Surgimento />
          <Evolucao />
        </Col>
        
      </Row>
        
    </div>
  )
}

export default SobreSenai