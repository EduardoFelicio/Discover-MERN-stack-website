import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Personal(props){
  return(
    <div style={{paddingTop:"50px"}}>
      <Container>
        <Row>
          <Col xl={6} lg={8} md={12} sm={12} xs={12} style={{textAlign:"center"}}>
            <img style={{height:"500px"}} src="/images/me.jpg"></img>
          </Col>
          <Col xl={6} lg={4} md={12} sm={12} xs={12}>
            <h1 className="about-title">About me</h1>
            <p>My name is Eduardo Felício and I'm a 21 year old Computer Science student in the Faculty of Science and Technology of the University of Coimbra.
            I have worked professionaly over every summer since I was 17. Ranging from being a factory worker to an intern and finally over the last 2 years a software
            engineering intern. I also plan on taking a Master's Degree in Software Engineering after my graduation.</p>
          <Row>
            <Col sm={12} style={{textAlign:"center", paddingTop:"90px"}}>
              <h5>If you'd like to know more</h5>
              <a href="/images/icons/gnome.jpg"><button className="resume-button" >RESUME</button></a>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
      <div style={{textAlign:"center", marginTop:"60px"}}>
        <img src="/images/icons/arrow-down.png" style={{height:"30px"}}></img>
      </div>
    </div>
  )
}

export default Personal;
