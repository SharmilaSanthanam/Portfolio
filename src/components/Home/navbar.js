import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbars() {
  return (
    <>
      {/* <br /> */}
      {/* <Navbar style={{backgroundColor: "#59b256"}}> */}
      <Navbar className="me-auto">
        <Container >
          <Navbar.Brand  as={Link} to="/" style={{color: "#008000"}}>Sharmila</Navbar.Brand>
          <Nav className="menu-auto">
          {/* <Nav className="me-auto"> */}
            <Nav.Link as={Link} to="/About" className="Nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/ProjectList">Project</Nav.Link>
            <Nav.Link as={Link} to="/Experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <br /> */}
     
    </>
  );
}

export default Navbars;