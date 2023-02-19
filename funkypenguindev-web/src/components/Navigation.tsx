import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface NavbarProps {
  darkmode?: boolean;
}

const Navigation: React.FC<NavbarProps> = ({darkmode}) => {
  return (
    <Navbar bg={darkmode ? "dark" : "light"} expand="lg">
      <Container>
        <Navbar.Brand href="/">Niall's Projects</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/projects/overview">Overview</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/projects/policies">Policies</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;