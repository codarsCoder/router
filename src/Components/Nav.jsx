import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function NavBar() {
    const navigate = useNavigate();
    //  const actived = isActive && nav-active
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={NavLink} to="/"  >Home</Nav.Link>
            <Nav.Link as={NavLink} to="/About">About</Nav.Link>
            <Nav.Link as={NavLink} to="/About/3">About/id</Nav.Link>
            <Nav.Link as={NavLink} to="/Person">Person</Nav.Link>
            <Nav.Link as={NavLink} to="/Contact">Contact</Nav.Link>
                <Button onClick={()=>navigate("/", {state:"hak"}) } >navigate kullanımı</Button>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;