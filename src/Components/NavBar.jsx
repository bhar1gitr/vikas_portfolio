import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Container className='navvvvv'>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav> 
            <Nav.Link style={{fontWeight:'bold'}} as={Link} to="/">Home</Nav.Link>
            <Nav.Link style={{fontWeight:'bold'}} as={Link} to="/office">Profession</Nav.Link>
            <Nav.Link style={{fontWeight:'bold'}} as={Link} to="/china">China Series</Nav.Link>
            <Nav.Link style={{fontWeight:'bold'}} as={Link} to="/yog">Yog</Nav.Link>
            <Nav.Link style={{fontWeight:'bold'}} as={Link} to="/discourses">Discourses</Nav.Link>
            <Nav.Link style={{fontWeight:'bold'}} as={Link} to="/others">Others</Nav.Link>
            <Nav.Link style={{fontWeight:'bold'}} as={Link} to="/achievements">Achievements</Nav.Link>
            <Nav.Link style={{fontWeight:'bold'}} as={Link} to="/trecking">Trekking</Nav.Link>
            {/* <Nav.Link style={{fontWeight:'bold'}} as={Link} to="/pravachan">Meditation & LifeStyle</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
