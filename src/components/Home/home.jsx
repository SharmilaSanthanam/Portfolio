import "./home.css";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import Mern from "../../images/webdev.jpg";

const Home = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">

          <h2 className="i-intro">Hi, Myself</h2>
          <h1 className="i-name">Sharmila</h1>
          <Nav.Link as={Link} to="/Resumepdf" className="resume">Click to view the Resume!!!</Nav.Link>
         
        </div>


        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Full-Stack Web Developer</div><br></br><br></br>
           

          </div>
          <img
              src={Mern}

              alt=""
              className="imag1"
            />
        </div>
        

      </div>

    </div>
  );
};

export default Home;