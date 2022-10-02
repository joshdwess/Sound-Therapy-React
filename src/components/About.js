import React from "react";
import { Container } from "react-bootstrap";
import cheesin from "../Assests/cheesin.JPG";

const About = () => {
    return(
        <div>
             <h1 className="about-header"></h1>
            <Container>
           
            <br/>
         <div className="line-break"></div>
           <div>
            <br/>
            <p className="about-me"> Sound Therapy is the utilization of sound and music to help relax the mind and imporve your overall wellbeing. It's come to my attention that quite a few of my friends in tech suffer from burnout. So that inspired me to make this application that is meant to help you relax and also discover something that you might enjoy listening to more in the future.  </p>   
         </div>
            <img src={cheesin}/>
         <p>  </p>
         </Container>
        </div>
        
        

        
      
    
    )

}


export {About};