
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

      <Card className="card" body outline >
        <CardBody >
          <CardTitle style={{textAlign: "center"}} tag="h5">
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
          </CardSubtitle>
          <CardText>
            We are a group of 
          </CardText>
        </CardBody>
      </Card>
      
    </div>
  );
}

export default About;
