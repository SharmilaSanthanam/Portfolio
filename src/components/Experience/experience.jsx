import "./experience.css";
import Musescore from "../../images/musescore.png"
import Mern from "../../images/merndev.png"
import Adobe from "../../images/adobe.png"
import { Container, Row } from "react-bootstrap";


const Experience = () => {
  return (
 <Container>
<Row>
   <div className="col-sm">
   <img
           src={Musescore}
           
            alt=""
            className="img1"
          />
            <p className="a-desc">
          Started in the Musical language Software World as a Data operator in <b>Musescore Software</b>!!!
        </p>
   
   </div>
   <div className="col-sm">
   <img
            src={Adobe}
            alt=""
            className="img2"
          />
            <p className="a-desc">
          Entered into the PhotoGraphy World of <b>Adobe Photoshop</b> as a Photo Editor!!!
        </p>
   </div>
   <div className="col-sm">
   <img
             src={ Mern}
            alt=""
            className="img3"
          />
           <p className="a-desc">
          At this moment, am enjoying the present wonderful journey as a <b>Full-Stack Web developer</b> !!!
        </p>
   </div>
</Row>
</Container>
    
  );
};

export default Experience;