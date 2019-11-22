import React, {Component} from 'react';
import SpaceSection from './space';
import Skills from './skills';
import Personal from './personal';
import Reveal from 'react-reveal/Reveal';
import Work from './work';

class About extends Component{
  render(){
    return(
      <div>
        <Reveal effect="fadeInUp">
          <Personal />
        </Reveal>
        <Reveal effect="fadeInUp">
          <Skills />
        </Reveal>
        <Reveal effect="fadeInUp">
          <Work />
        </Reveal>
        <SpaceSection />
        <SpaceSection />
      </div>
    );
  }
}

export default About;
