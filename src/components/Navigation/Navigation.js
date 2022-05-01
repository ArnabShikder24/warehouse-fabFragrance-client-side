import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar className='py-4' bg="light" expand="lg">
                <Container>
                    <Link className='navbar-brand font-monospace' to="/home">Fab Fragrance</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link' to="/home">Home</Link>
                        <Link className='nav-link' to="/inventory">Inventory</Link>
                        <Link className='nav-link' to="/login">Login</Link>
                        <Link className='nav-link' to="/signup">Sign Up</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;