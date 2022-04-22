
import React from 'react';
import '../../App.css';

import { 
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  CardBody,
  CardSubtitle,
  Button,
} from 'reactstrap';

function About() {
  return (
      <Card outline className="cardBody" >

        <CardBody >
          <Row>

          <Col>
            <CardTitle style={{color: "white", opacity: "0.65"}} tag="h5">
              About
            </CardTitle>
            <CardText style={{color: "white", opacity: "0.65"}}>
              We are a collection of STEM trained individuals working
              on improving the food security of our future.
            </CardText>
          </Col>
          <Col>
            
            <img 
              style={{
                opacity: "0.65", 
                marginLeft: "20px", 
                marginRight: "0px", 
                borderRadius: "4px", 
                width: "400px", 
                height: "auto", 
              }}
              src={require('./../../media/images/trestk.jpg')} 
              type="image/jpg"
            />
          </Col>
          </Row>
        </CardBody>

        <image 
          style={{
            opacity: "0.65", 
          }}
          src={require('./../../media/images/trestk.jpg')} 
          type="image/jpg"
        />

      </Card>
  );
}

export default About;
