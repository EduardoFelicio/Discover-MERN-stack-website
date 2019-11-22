import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Work(props){
  return(
    <div style={{marginTop:"90px"}}>
    <Container fluid="true" style={{background:"#F0F0F0",textAlign:"left"}}>
      <Row style={{height:"330px", paddingTop:"40px"}}>
      <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
        <Col xl={10} lg={10} md={10} sm={10} xs={10}>
          <h1>Experience</h1>
          <p><b>Professional experience:</b>
          <br /> - Internship as a factory worker in Portrisa S.A.
          <br /> - Internship as an administration assistant in Portrisa S.A.
          <br /> - Internship as a software engineer in Portrisa S.A.
          </p>
          <p><b>Personal Projects</b>
          <br /> - Xamarin mobile app (4NER)
          <br /> - HTML CSS bootstrap website (portrisa.com)
          <br /> - This MERN photo portfolio
          </p>
        </Col>
        <Col xl={1} lg={1} md={1} sm={1} xs={1}></Col>
      </Row>
    </Container>
    </div>
  )
}

export default Work;
