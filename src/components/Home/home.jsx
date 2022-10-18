import "./home.css";
import Nav from 'react-bootstrap/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Mern from "../../images/webdev1.jpg";

const Home = () => {

  return (
    <Container>
      <Row >
        <Col>
          <div className="row justify-content-center">
            <h2 className="i-intro">Hi, Myself</h2>
            <h1 className="i-name">Sharmila</h1>
            <div className="i-title-wrapper">
              <div className="i-title-item">Full-Stack Web Developer</div><br></br><br></br>
            </div>
          </div>
          <Nav.Link as={Link} to="/Resumepdf" className="resume">Click to view the Resume!!!</Nav.Link>
        </Col>
        <Col>
          <div className="i-title">
            <img src={Mern} alt="Mern" style={{ width: "370px" }} className="imag1" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;