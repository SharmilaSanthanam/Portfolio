import React from 'react';
import Resume from "../../images/Resume.pdf";

const ResumePdf = () => {
  return (
    <div> 
       <a href={Resume} download>Click here to download RESUME!!!</a>
         <object width="100%" height="500" data={Resume} type="application/pdf">
        
         </object>
      </div>
  )
}

export default ResumePdf;