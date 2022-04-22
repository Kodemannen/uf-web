
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

  const cardTitleStyle = {color: "white", 
                          opacity: "0.65", 
                          textAlign: "justify"}

  const cardBodyStyle = {maxWidth: "950px", margin: "auto"};

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
        <CardBody style={cardBodyStyle} >
          <Row>
          <Col>
            <CardTitle style={cardTitleStyle} tag="h5">
              About us
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
        <CardBody style={cardBodyStyle} >
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
              As the tallest, Bjørn is the natural choice as CEO. He has 
              a masters degree in thesis writing from the University of Oslo.  
            </CardText>
            
          </Col>
          </Row>
        </CardBody>

      </Card>
    )
  }

  const AboutSebCard = () => {
    return (
      <Card outline style={{background: Colors.c2}}>
        <CardBody style={cardBodyStyle} >
          <Row>
          <Col>
            <CardTitle style={cardTitleStyle} tag="h5">
              Chief Economist - Sebastian Gregorius Winther-Larsen, PhD Dr.
            </CardTitle>
            <CardText style={{color: "white", opacity: "0.65"}}>
              This guy has half a masters degree for each of his four names.
            </CardText>
          </Col>
          <Col>
            <img 
              style={{...imgStyle}}
              src={require('./../../media/images/seb.jpg')} 
              type="image/jpg"
            />
          </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }


  const AboutGunnarCard = () => {
    return (
      <Card outline style={{background: Colors.c3}}>
        <CardBody style={cardBodyStyle} >
          <Row>
          <Col>
            <img 
              style={{...imgStyle}}
              src={require('./../../media/images/gunnarsykkel.jpg')} 
              type="image/jpg"
            />
          </Col>
          <Col>
            <CardTitle style={cardTitleStyle} tag="h5">
              CTO - Gunnar Thorsen Liahjelm
            </CardTitle>
            <CardText style={{color: "white", opacity: "0.65"}}>
              This guy has almost one masters degree
            </CardText>
          </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }

  const AboutSamuelCard = () => {
    return (
      <Card outline style={{background: Colors.c2}}>
        <CardBody style={cardBodyStyle} >
          <Row>
          <Col>
            <CardTitle style={cardTitleStyle} tag="h5">
              Head of Security - Samuel Knudsen, PhD Dr.
            </CardTitle>
            <CardText style={{color: "white", opacity: "0.65"}}>
              One masters, one PhD dropout degree
            </CardText>
          </Col>
          <Col>
            <img 
              style={{...imgStyle}}
              src={require('./../../media/images/samuel.jpg')} 
              type="image/jpg"
            />
          </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }


  return (
    <div className="page" >
      <AboutUsCard />
      <AboutBjornCard />
      <AboutSebCard />
      <AboutGunnarCard />
      <AboutSamuelCard />
    </div>
  );
}

export default About;
