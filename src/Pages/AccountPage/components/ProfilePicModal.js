// import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
// import useAuth from '../../../Auth/useAuth'

export default function ProfilePicModal({isOpen, close}) {




  return (
    <Modal show={true} onHide={close}>
        <Modal.Header closeButton>
            <Modal.Title> Cambiar mi foto de perfil </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <input type='file'/>
            </Form>
          
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary'onClick={close}> Cancelar </Button>
            <Button variant='primary'> Actualizar mi imagen </Button>
        </Modal.Footer>

    </Modal>
  )
}
