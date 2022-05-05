import React from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import changePasswordResolver from '../../../validations/changePasswordResolver';

export default function ChangePasswordModal({ isOpen, close }) {

    const { register, handleSubmit, formState:{errors} } = useForm({ resolver: changePasswordResolver });  

    const onSubmit = (formData) => {
        alert('CHANGE PASSWORD')

    }

  return (
    <Modal show={ true } onHide={ close }>
        <Modal.Header closeButton>
            <Modal.Title> Cambiar Contraseña </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label> Nueva contraseña</Form.Label>
                    <Form.Control
                        placeholder='Escribe una nueva contraseña'
                        {...register('password')}
                    />

                    { errors?.password && (
                    
                        <Form.Text>
                            <Alert variant='danger'>
                                "Error en el campo contraseña"
                            </Alert>
                        </Form.Text>
                        
                    )}

                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary'onClick={ close }> Cancelar </Button>
            <Button variant='primary' onClick={ handleSubmit(onSubmit) }> Actualizar contraseña </Button>
        </Modal.Footer>

    </Modal>
  )
};
