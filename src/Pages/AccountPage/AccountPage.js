import React from 'react'
import { useState } from 'react';
import {Container, Row, Col, Card, Button } from 'react-bootstrap'
import useAuth from '../../Auth/useAuth';
import DeleteModal from './components/DeleteModal';

export default function AccountPage() {

  const {user} = useAuth();

  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const openDeleteModal = () => setisOpenDeleteModal(true);
  const closeDeleteModal = () => setisOpenDeleteModal(false);

 
  return (
    <>
      <Container>
        <Row className='mt-4'>
          <Col xs={ 12 } className='text-center'>
            <img
              src='/img/male_avatar.svg'
              alt='profile'
              style={{
                width:'200px',
                height:'200px',
                borderRadius:'50%',
                objectFit:'cover'
              }}
            />
          </Col>
          <Col className='mt-5'>
            <Card style={{maxWidth:'360px'}} className='mx-auto p-4'>
              <p className='text-center'> <b>Nombre: </b>{user.name}</p>
              <p className='text-center'> <b>Correo: </b>{user.email}</p>
              <p className='text-center'> <b>Rol: </b>{user.role}</p>

              <Button variant='warning'>Editar Cuenta</Button>
              <Button variant='link' className='mt-1 text-decoration-none'>Cambiar Contraseña</Button>
              
              <Button variant='link' 
              className='mt-3 text-decoration-none text-danger'
              onClick={openDeleteModal} > Eliminar Cuenta </Button>

            </Card>
          </Col>
        </Row>
      </Container>
      <DeleteModal
        isOpen={isOpenDeleteModal}
        close={closeDeleteModal}
      />
    </>
  )
}
