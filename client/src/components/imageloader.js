import React, {Component} from 'react';
import images from './images';
import {Grid, Cell} from 'react-mdl';
import Gallery from './gallery';
import Lightbox from 'react-image-lightbox';


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
          <Grid>
            <Cell col={3}>
            <div className="imageContainerAux">
              <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url1})} style={{backgroundImage: "url("+this.props.url1+")"}}></div>
            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
              <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url2})} style={{backgroundImage: "url("+this.props.url2+")"}}></div>

            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
              <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url3})} style={{backgroundImage: "url("+this.props.url3+")"}}></div>
            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
              <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url4})} style={{backgroundImage: "url("+this.props.url4+")"}}></div>
            </div>
            </Cell>
            {this.toggleGallery(this.state.picked)}
          </Grid>
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
          <Grid>
            <Cell col={3}>
            <div className="imageContainerAux">
              <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url1})} style={{backgroundImage: "url("+this.props.url1+")"}}></div>

            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
              <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url2})} style={{backgroundImage: "url("+this.props.url2+")"}}></div>
            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
              <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url3})} style={{backgroundImage: "url("+this.props.url3+")"}}></div>
            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
            </div>
            </Cell>
            {this.toggleGallery(this.state.picked)}
          </Grid>
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
          <Grid>
            <Cell col={3}>
            <div className="imageContainerAux">
              <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url1})} style={{backgroundImage: "url("+this.props.url1+")"}}></div>
            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
              <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url2})} style={{backgroundImage: "url("+this.props.url2+")"}}></div>
            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
            </div>
            </Cell>
            {this.toggleGallery(this.state.picked)}
          </Grid>
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
          <Grid>
            <Cell col={3}>
            <div className="imageContainerAux">
              <div className="imageContainer" onClick={() => this.setState({ isToggleOn: true, picked: this.props.url1})} style={{backgroundImage: "url("+this.props.url1+")"}}></div>
            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
            </div>
            </Cell>
            <Cell col={3}>
            <div className="imageContainerAux">
            </div>
            </Cell>
            {this.toggleGallery(this.state.picked)}
          </Grid>
        );
    }
}

class ImageLoader extends Component {
    render() {
        var arr=images;
        var elements=[],acceptedImages=[];
        if(this.props.tag!=null && this.props.tag!="all") {
          for(let i=0;i<arr.length;i++){
            if(arr[i].tag == this.props.tag){
              acceptedImages.push(arr[i]);
            }
          }
        } else acceptedImages = arr;
        for(let i=0;i<acceptedImages.length  && i < 12;){
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
