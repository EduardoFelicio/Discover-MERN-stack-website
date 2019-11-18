import React, {Component} from 'react';
import SpaceSection from './space';
import Skills from './skills';
import Personal from './personal';
import Reveal from 'react-reveal/Reveal';

class About extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    window.scrollTo(0,0);
 }
  render(){
    return(
      <div>
        <Reveal effect="fadeInUp">
          <Personal />
        </Reveal>

        <Reveal effect="fadeInUp">
          <Skills />
        </Reveal>
        
        <SpaceSection />
        <SpaceSection />
      </div>
    );
  }
}

export default About;
