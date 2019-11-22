import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import json from './images';

var images = [],all=[],hiking=[],paris=[],snow=[],university=[],tech=[];
var atual ="random string";

for(let i=0;i<json.length;i++){
  all.push(json[i].url);
  if(json[i].tag === "hiking"){
    hiking.push(json[i].url);
  }
  if(json[i].tag === "paris"){
    paris.push(json[i].url);
  }
  if(json[i].tag === "snow"){
    snow.push(json[i].url);
  }
  if(json[i].tag === "university"){
    university.push(json[i].url);
  }
  if(json[i].tag === "tech"){
    tech.push(json[i].url);
  }
}

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      tag: null
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

  if(this.props.tag!==atual){
    if(this.props.tag==="all") images = all;
    else if(this.props.tag==="hiking") images = hiking;
    else if(this.props.tag==="paris") images = paris;
    else if(this.props.tag==="snow") images = snow;
    else if(this.props.tag==="university") images = university;
    else if(this.props.tag==="tech") images = tech;
    else if(this.props.tag===null) images = all;
    atual=this.props.tag;
    this.setState({photoIndex: 0});
  }

    return (
      <div>
        <div className="button-wrapper">
          <button className="gallery-button" type="button" onClick={() => this.setState({ isOpen: true })}>
            Presentation Mode
          </button>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Gallery;
