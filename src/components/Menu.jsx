import { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import './Menu.css';

function Menu() {

    const [location, setLocation] = useState('');

    const formState = (e) => {
        setLocation(e.target.value);
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Form className="d-flex gap-3">
                        <Form.Group>
                            <Form.Control type="text" placeholder="My Favorite Place" value={location} onChange={formState} />
                        </Form.Group>
                        <Button type="submit">Forecast!</Button>
                    </Form>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Menu;