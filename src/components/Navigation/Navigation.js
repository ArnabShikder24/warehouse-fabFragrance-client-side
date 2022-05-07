import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navigation = () => {
    const [user] = useAuthState(auth);

    //signUp function
    const logOutHandle =() => {
        signOut(auth)
    }
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
                        {
                            user ?
                            <>
                            <Link className='nav-link' to="/manage-inventory">Manage Inventory</Link>
                            <Link className='nav-link' to="/add-item">Add Item</Link>
                            <Link className='nav-link' to="/my-items">My items</Link>
                            <button onClick={logOutHandle} className='social-btn'><span>LogOut</span></button>
                            </>
                            :
                            <>
                            <Link className='nav-link' to="/login">Login</Link>
                            <Link className='nav-link' to="/signup">Sign Up</Link>
                            </>
                        }
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;