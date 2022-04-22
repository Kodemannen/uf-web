
import React, { useRef } from 'react'
import '../../App.css';

import Colors from '../Colors.jsx';

// import img from './../../media/images/trestk.jpg'

import { 
  Card,
  CardText,
  Row,
  Col,
  CardTitle,
  CardBody,
} from 'reactstrap';

function About() {

  const cardTitleStyle = {color: "white", opacity: "0.65", textAlign: "justify"}

  const imgStyle = { opacity: "0.65", 
                     marginLeft: "20px", 
                     marginRight: "0px", 
                     borderRadius: "4px", 
                     width: "400px", 
                     height: "auto", 
                    }


  const AboutUsCard = () => {
    return (
      <Card outline style={{background: Colors.c2}}>
        <CardBody >
          <Row>
          <Col>
            <CardTitle style={cardTitleStyle} tag="h5">
              About
            </CardTitle>
            <CardText style={{color: "white", opacity: "0.65"}}>
              We are a collection of STEM oriented individuals working
              on improving the food security of the future.
            </CardText>
          </Col>
          <Col>
            <img 
              style={imgStyle}
              src={require('./../../media/images/trestk.jpg')} 
              type="image/jpg"
            />
          </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }

  const AboutBjornCard = () => {
    return (
      <Card outline style={{background: Colors.c3}} >
        <CardBody >
          <Row>
          <Col>
            <img 
              style={imgStyle}
              src={require('./../../media/images/bjorn.jpg')} 
              type="image/jpg"
            />
          </Col>
          <Col>
            <CardTitle style={cardTitleStyle} tag="h5">
              CEO - Bjørn Ingeberg Fesche
            </CardTitle>
            <CardText style={{color: "white", opacity: "0.65", textAlign: "justify"}}>
              As the tallest of us, Bjørn was the natural choice as CEO. He does also have
              a master in code writing of some sorts from the University of Oslo.  
            </CardText>
            
          </Col>
          </Row>
        </CardBody>

      </Card>
    )
  }



  return (
    <>
      <AboutUsCard />
      <AboutBjornCard />
    </>
  );
}

export default About;
