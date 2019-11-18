import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import json from './images';

var images = [],all=[],thailand=[],paris=[],pirates=[],boys=[],latada=[],ahri=[],locked=[];
var atual ="random string";

for(let i=0;i<json.length;i++){
  all.push(json[i].url);
  if(json[i].tag === "thailand"){
    thailand.push(json[i].url);
  }
  if(json[i].tag === "paris"){
    paris.push(json[i].url);
  }
  if(json[i].tag === "pirates"){
    pirates.push(json[i].url);
  }
  if(json[i].tag === "latada"){
    latada.push(json[i].url);
  }
  if(json[i].tag === "boys"){
    boys.push(json[i].url);
  }
  if(json[i].tag === "ahri"){
    ahri.push(json[i].url);
  }
  if(json[i].tag === "locked"){
    locked.push(json[i].url);
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

  if(this.props.tag!=atual){
    if(this.props.tag==="all") images = all;
    else if(this.props.tag==="thailand") images = thailand;
    else if(this.props.tag==="paris") images = paris;
    else if(this.props.tag==="pirates") images = pirates;
    else if(this.props.tag==="latada") images = latada;
    else if(this.props.tag==="boys") images = boys;
    else if(this.props.tag==="ahri") images = ahri;
    else if(this.props.tag==="locked") images = locked;
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
