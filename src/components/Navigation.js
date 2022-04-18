import React from 'react'
import {Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import { NavLink } from 'react-router-dom'
import routes from '../helpers/routes'

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark'>
        <NavbarBrand as={NavLink} to={routes.home}> TaskerApp </NavbarBrand>
        <NavbarToggle aria-controls='responsive-navbar-nav' />
        <NavbarCollapse id='responsive-navbar-nav'>
            
            <Nav>
                <Nav.Link as={NavLink} to={routes.projects}> Projectos </Nav.Link>
                <NavDropdown title='Admin'>
                    <NavDropdown.Item as={NavLink} to={routes.admin.users} > Usuarios </NavDropdown.Item>
                </NavDropdown>
            </Nav>

            <Nav className='ms-auto'>
                <Nav.Link as={NavLink} to={routes.login}> Iniciar Sesión </Nav.Link>
                <Nav.Link as={NavLink} to={routes.register}> Registrarse </Nav.Link>
                <Nav.Link as={NavLink} to={routes.account}> Mi cuenta </Nav.Link>
            </Nav>

        </NavbarCollapse>
    </Navbar>
  )
}