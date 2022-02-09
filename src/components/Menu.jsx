import { useState, useContext, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { WeatherContext } from '../utils/WeatherContext';
import './Menu.css';

function Menu() {

    const key = '3e8fd441ffe94cd1d1f73c4d27b77283';

    const { localInfo, setLocalInfo } = useContext(WeatherContext);

    const [formInput, setformInput] = useState('');
    const [fetchLocation, setFetchLocation] = useState('');

    const formState = (e) => {
        setformInput(e.target.value);
    }

    useEffect(() => {
        let url = '';
        if(isNaN(fetchLocation)) {
            url = `http://api.openweathermap.org/geo/1.0/direct?q=${fetchLocation}&appid=${key}`;
        } else {
            url = `http://api.openweathermap.org/geo/1.0/zip?zip=${fetchLocation}&appid=${key}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(details => {
                if(isNaN(fetchLocation)) {
                    setLocalInfo({
                        locale: details[0].name,
                        lat: details[0].lat,
                        long: details[0].lon
                    });
                } else {
                    setLocalInfo({
                        locale: details.name,
                        lat: details.lat,
                        long: details.lon
                    });
                }
                
            })
    }, [fetchLocation]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFetchLocation(formInput);
        setformInput('');
    }

    useEffect(() => {
        console.log(localInfo);
    }, [localInfo]);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Form className="d-flex gap-3" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="City or ZIP code" value={formInput} onChange={formState} />
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