import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container } from 'react-bootstrap'

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <Container>
                <Navbar>This is Navbar</Navbar>
                </Container>
            </header>
        )
    }
}

export default Header