import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import BsNb from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <BsNb bg="light" expand="lg">
            <Container>
                <BsNb.Brand href="#home">Mercadito</BsNb.Brand>
                <BsNb.Toggle aria-controls="basic-navbar-nav" />
                <BsNb.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    <NavDropdown title="Shop" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Tennis Rackets</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Padel Rackets</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Balls</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Accessories</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#cart"><CartWidget/></Nav.Link>
                </Nav>
                </BsNb.Collapse>
            </Container>
        </BsNb>
    )
}

export default NavBar
