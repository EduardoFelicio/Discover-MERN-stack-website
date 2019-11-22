import React, {Component} from 'react';
import images from './images';
import Lightbox from 'react-image-lightbox';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Image4 extends Component {
  constructor(props) {
    super(props);
    this.state = {tag: null, isToggleOn: false, picked: null};
    this.toggleGallery = this.toggleGallery.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return {tag: props.tag};
  }

  toggleGallery(image) {  // switch the value of the showModal state
    if(this.state.isToggleOn){
      return (<Lightbox
        mainSrc={image}
        onCloseRequest={() => this.setState({ isToggleOn: false })}
      />);
    }
  }
    render() {
        return (
          <Container fluid="true">
            <Row>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
                <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url1})} style={{backgroundImage: "url("+this.props.url1+")"}}></div>
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
                <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url2})} style={{backgroundImage: "url("+this.props.url2+")"}}></div>
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
                <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url3})} style={{backgroundImage: "url("+this.props.url3+")"}}></div>
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
                <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url4})} style={{backgroundImage: "url("+this.props.url4+")"}}></div>
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              {this.toggleGallery(this.state.picked)}
            </Row>
          </Container>
        );
    }
}


class Image3 extends Component {
  constructor(props) {
    super(props);
    this.state = {tag: null, isToggleOn: false, picked: null};
    this.toggleGallery = this.toggleGallery.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return {tag: props.tag};
  }

  toggleGallery(image) {  // switch the value of the showModal state
    if(this.state.isToggleOn){
      return (<Lightbox
        mainSrc={image}
        onCloseRequest={() => this.setState({ isToggleOn: false })}
      />);
    }
  }
    render() {
        return (
          <Container fluid="true">
            <Row>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
                <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url1})} style={{backgroundImage: "url("+this.props.url1+")"}}></div>
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
                <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url2})} style={{backgroundImage: "url("+this.props.url2+")"}}></div>
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
                <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url3})} style={{backgroundImage: "url("+this.props.url3+")"}}></div>
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              {this.toggleGallery(this.state.picked)}
            </Row>
          </Container>
        );
    }
}


class Image2 extends Component {
  constructor(props) {
    super(props);
    this.state = {tag: null, isToggleOn: false, picked: null};
    this.toggleGallery = this.toggleGallery.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return {tag: props.tag};
  }

  toggleGallery(image) {  // switch the value of the showModal state
    if(this.state.isToggleOn){
      return (<Lightbox
        mainSrc={image}
        onCloseRequest={() => this.setState({ isToggleOn: false })}
      />);
    }
  }
    render() {
        return (
          <Container fluid="true">
            <Row>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
                <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url1})} style={{backgroundImage: "url("+this.props.url1+")"}}></div>
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
                <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url2})} style={{backgroundImage: "url("+this.props.url2+")"}}></div>
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              {this.toggleGallery(this.state.picked)}
            </Row>
          </Container>
        );
    }
}


class Image1 extends Component {
  constructor(props) {
    super(props);
    this.state = {tag: null, isToggleOn: false, picked: null};
    this.toggleGallery = this.toggleGallery.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return {tag: props.tag};
  }

  toggleGallery(image) {  // switch the value of the showModal state
    if(this.state.isToggleOn){
      return (<Lightbox
        mainSrc={image}
        onCloseRequest={() => this.setState({ isToggleOn: false })}
      />);
    }
  }
    render() {
        return (
          <Container fluid="true">
            <Row>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
                <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url1})} style={{backgroundImage: "url("+this.props.url1+")"}}></div>
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              <Col xl={3} lg={6} md={6} sm={12} xs={12}>
              <div className="imageContainerAux">
              </div>
              <div style={{paddingTop:"40px"}}></div>
              </Col>
              {this.toggleGallery(this.state.picked)}
            </Row>
          </Container>
        );
    }
}

class ImageLoader extends Component {
    render() {
        var arr=images;
        var elements=[],acceptedImages=[];
        if(this.props.tag!==null && this.props.tag!=="all") {
          for(let i=0;i<arr.length;i++){
            if(arr[i].tag === this.props.tag){
              acceptedImages.push(arr[i]);
            }
          }
        } else acceptedImages = arr;
        for(let i=0;i<acceptedImages.length;){
          if(acceptedImages[i+3] != null){
            elements.push(<Image4 tag={this.props.tag} url1={acceptedImages[i].url} url2={acceptedImages[i+1].url}
              url3={acceptedImages[i+2].url} url4={acceptedImages[i+3].url} />);
            i+=4;
            continue;
          }
          if(acceptedImages[i+2] != null){
            elements.push(<Image3 url1={acceptedImages[i].url} url2={acceptedImages[i+1].url}
              url3={acceptedImages[i+2].url} />);
            i+=3;
            continue;
          }
          if(acceptedImages[i+1] != null){
            elements.push(<Image2 url1={acceptedImages[i].url} url2={acceptedImages[i+1].url} />);
            i+=2;
            continue;
          }
          if(acceptedImages[i] != null){
            elements.push(<Image1 url1={acceptedImages[i].url} />);
            i++;
          }
        }
        return (
            <div>
              {elements}
            </div>
        );
    }
}


export default ImageLoader;
