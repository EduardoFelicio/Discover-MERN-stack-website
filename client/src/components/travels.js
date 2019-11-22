import React, {Component} from 'react';
import ImageLoader from './imageloader';
import Reveal from 'react-reveal/Reveal';
import TabMenuExperiences from './tabmenuexperiences';
import SpaceSection from './space';
import Gallery from './gallery';
import ExperienceTitle from './experiencetitle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Travels extends Component {
  constructor(props) {
      super(props)
      this.state = {
        tag: null,
        count: 1
      };
  }
   handleTag = (tagValue) => {
        this.setState({tag: tagValue});
    }
    render() {
        return (
          <div>
            <TabMenuExperiences onSelectTag={this.handleTag}/>
            <Container>
              <Row>
                <Col xl={3} lg={3} md={3} sm={0} xs={0}>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12} xs={12}>
                  <Reveal effect="fadeInUp">
                    <ExperienceTitle title={this.state.tag} />
                  </Reveal>
                </Col>
                <Col xl={3} lg={3} md={3} sm={12} xs={12}>
                  <Reveal effect="fadeInUp">
                    <Gallery tag={this.state.tag} />
                  </Reveal>
                </Col>
              </Row>
            </Container>
            <div style={{height:"40px"}}></div>
            <Reveal effect="fadeInUp">
              <ImageLoader tag={this.state.tag}/>
            </Reveal>
            <SpaceSection />
          </div>
        )
    };
}

export default Travels;
