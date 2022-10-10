import "./about.css";
import Mern from "../../images/mern.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
       
        <div className="a-card">
          <div>
           <img
           src={Mern}
           
            alt=""
            className="img1"
          /> 
       
          </div>
          
         
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Am a...</h1><br></br>
        <p className="a-desc">
          Detail Oriented One...
        </p>

        <p className="a-desc">
Enjoys the journey of learning new things...
        </p>

        <p className="a-desc">
          
        </p>
       
      </div>
    </div>
  );
};

export default About;