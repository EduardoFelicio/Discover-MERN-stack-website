import React, {Component} from 'react';
import MainSplash from './mainsplash';
import TravelCard from './travelcard';
import InfoSection from './infosection';
import SpaceSection from './space';
import TabMenu from './tabmenu';
import Reveal from 'react-reveal/Reveal';

class Landing extends Component{
  render(){
    return(
      <div>
      <MainSplash />
      <TabMenu />
      <Reveal effect="fadeInUp">
        <div>
          <InfoSection title="Nature" id="nature-id" />
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div>
          <TravelCard title="Hiking" imgUrl="/images/experiences/hiking/hikingmain.jpg" coverColor="#808080" description="" />
        </div>
      </Reveal>
      <SpaceSection />
      <Reveal effect="fadeInUp">
        <div>
          <TravelCard title="Snow" imgUrl="/images/experiences/snow/snowmain.jpg" coverColor="#808080" description="" />
        </div>
      </Reveal>
      <SpaceSection />
      <Reveal effect="fadeInUp">
        <div>
          <InfoSection title="Places" id="places-id"  />
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div>
            <TravelCard title="Paris" imgUrl="/images/experiences/paris/parismain.jpg" coverColor="#808080" description="" />
        </div>
      </Reveal>
      <SpaceSection />
      <Reveal effect="fadeInUp">
        <div>
          <TravelCard title="University" imgUrl="/images/experiences/university/universitymain.jpg" coverColor="#808080" description="" />
        </div>
      </Reveal>
      <SpaceSection />
      <Reveal effect="fadeInUp">
        <div>
          <InfoSection title="Tech" id="tech-id"  />
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div>
            <TravelCard title="Tech" imgUrl="/images/experiences/tech/techmain.jpg" coverColor="#808080" description="" />
        </div>
      </Reveal>
      <SpaceSection />
      </div>
    );
  }
}

export default Landing;
