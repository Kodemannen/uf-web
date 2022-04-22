
import React from 'react';
import '../../App.css';

import { 
  Card,
  CardTitle,
  CardText,
  CardBody,
  CardSubtitle,
  Button,
} from 'reactstrap';

function About() {
  return (
    <div className="page">

      <Card outline className="cardBody" >

        <CardBody >
          <CardTitle style={{textAlign: "center"}} tag="h5">
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
          </CardSubtitle>

          <CardText style={{color: "white", opacity: "0.65"}}>
            We are a collection of STEM oriented individuals who want
            to help improving the future of local food security.
          </CardText>
        </CardBody>
        <image 
          style={{
            opacity: "0.65", 
          }}
          src={require('./../../media/images/trestk.jpg')} 
          type="image/jpg"
        />

      </Card>
      
    </div>
  );
}

export default About;
