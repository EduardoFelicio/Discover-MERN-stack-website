import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skills(props){
  return(
    <div style={{marginTop:"40px"}}>
    <Container fluid="true" style={{background:"#F0F0F0"}}>
      <Row style={{height:"300px", paddingTop:"40px"}}>
        <Col xl={1} lg={1} md={1} sm={1} xs={1} >
        </Col>
        <Col xl={5} lg={6} md={10} sm={10} xs={10}>
          <h1 className="skills-title">Skills</h1>
          <p style={{paddingLeft:"10px"}}>Proficient in Java, C, ReactJs, HTML, CSS and JS<br />Some experience with Xamarin, NodeJs, ExpressJs, MongoDB, mySQL, PHP and Matlab</p>
        </Col>
        <Col xl={5} lg={4} md={12} sm={12} xs={12} style={{textAlign:"center", background:"#F0F0F0"}}>
          <Row>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <img  alt="" src="/images/icons/react.png" className="skill-icon"></img>
              <p className="skill-text">React</p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <img alt="" src="/images/icons/node.png" className="skill-icon"></img>
              <p className="skill-text">Node</p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <img alt="" src="/images/icons/java.png" className="skill-icon"></img>
              <p className="skill-text">Java</p>
            </Col>
          </Row>
          <Row>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <img alt="" src="/images/icons/xamarin.png" className="skill-icon"></img>
              <p className="skill-text">Xamarin</p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <img alt="" src="/images/icons/html.png" className="skill-icon"></img>
              <p className="skill-text">HTML / CSS / JS</p>
            </Col>
            <Col xl={4} lg={4} md={4} sm={4} xs={4}>
              <img alt="" src="/images/icons/c.png" className="skill-icon"></img>
              <p className="skill-text">C</p>
            </Col>
          </Row>
        </Col>
        <Col xl={1} lg={1}  md={1} sm={1} xs={1}>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Skills;
