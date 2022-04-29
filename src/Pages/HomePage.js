import React from 'react'
import {Container, Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from '../helpers/routes'

export default function HomePage() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={{span:12}} md={{span:6}} className='mb-5'>
          <h2> Biemvenid@ a el gestor de tareas </h2>
          <p> ¡Aqui podras gestionar tus proyectos! </p>
          <p>
            Marca, agrega, actualiza o elimina tus tareas
          </p>

          <div> 
            <Link to={routes.login}> Ingresa </Link> o
            <Button as={Link} to={routes.register} className='ml-1'> Crea un cuenta </Button>
          </div>  
        </Col>
        <Col>
          <img 
          className='img-fluid'
          src='/img/task-manager.svg' 
          alt='gestor-de-tareas'
          />
          <p>¡Gestiona tu tiempo, mejora tu productividad!</p>
        </Col>
      </Row>
    </Container>
  )
}
