import { faMeteor } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {

    const handleButtonClick = () => {
        const navigate = useNavigate();
        navigate("/employeeRegister");
    }

  return (
    <Navbar bg='dark' variant='dark' expand="lg" fixed='top'>
        <Container fluid>
            <Navbar.Brand href='/' style={{"color":'gold'}}>
                <FontAwesomeIcon icon={faMeteor} /> VJ Constructions
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className='me-auto my-2 my-lg-0'
                    style={{maxHeight: '100px'}}
                    navbarScroll
                >
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                </Nav>
                <Button variant='outline-info' onClick={handleButtonClick}>Employee Register</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header