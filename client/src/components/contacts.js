import React, {Component} from 'react';
import SpaceSection from './space';
import Reveal from 'react-reveal/Reveal';

class Contact extends Component{
  render(){
    return(
      <div style={{background:"#F5F5F5"}}>
        <div style={{height:"100px"}}></div>
        <Reveal effect="fadeInUp">
          <h1 style={{textAlign:"center"}} className="anurati">C O N T A C T</h1>
          <div style={{height:"220px",width:"300px",borderRadius:"10px",margin:"auto", background:"#fff",paddingLeft:"40px"}}>
            <div style={{height:"20px"}}></div>
            <div>
              <img alt="" className="contact-image" src="/images/social/email.png"/>
              <span className="dense"><b> Email:</b> efelicio@hotmail.com</span>
              <div style={{height:"10px"}}></div>
            </div>
            <div>
              <img alt="" className="contact-image" src="/images/social/github.svg"/>
              <span className="dense"><b> GitHub: </b><a href="https://github.com/EduardoFelicio">@EduardoFelicio</a><br/></span>
            </div>
            <div style={{height:"10px"}}></div>
            <div>
              <img alt="" className="contact-image" src="/images/social/facebook.svg"/>
              <span className="dense"><b> Facebook: </b><a href="https://facebook.com/eduardo.felicio.503">@eduardo.felicio.503</a><br/></span>
            </div>
            <div style={{height:"10px"}}></div>
            <div>
              <img alt="" className="contact-image" src="/images/social/instagram.svg"/>
              <span className="dense"><b> Instagram: </b><a href="https://instagram.com/eduardo_felicio98">@eduardo_felicio98</a><br/></span>
            </div>
          </div>
        </Reveal>
        <SpaceSection />
        <SpaceSection />
      </div>
    );
  }
}

export default Contact;
