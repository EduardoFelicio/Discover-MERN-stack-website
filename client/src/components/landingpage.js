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
          <InfoSection title="ABROAD" id="abroad-id" />
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div>
          <TravelCard title="Thailand" imgUrl="/images/thaimain.jpg" coverColor="#808080" description="Bangkok, Suratthani, Koh Samui, Koh Phy Phy, Phuket" />
        </div>
      </Reveal>
      <SpaceSection />
      <Reveal effect="fadeInUp">
        <div>
          <TravelCard title="Paris" imgUrl="/images/parismain.jpg" coverColor="#808080" description="Eiffel Tower, Arch du Triumph, Louvre" />
        </div>
      </Reveal>
      <SpaceSection />
      <Reveal effect="fadeInUp">
        <div>
          <InfoSection title="UNIVERISITY" id="university-id"  />
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div>
            <TravelCard title="House of Pirates" imgUrl="/images/piratemain.jpg" coverColor="#808080" description="Strip Quina?" />
        </div>
      </Reveal>
      <SpaceSection />
      <Reveal effect="fadeInUp">
        <div>
          <TravelCard title="Latada" imgUrl="/images/latadamain.jpg" coverColor="#808080" description="Family, Friends and a lot of Alcohol" />
        </div>
      </Reveal>
      <SpaceSection />
      <Reveal effect="fadeInUp">
        <div>
            <TravelCard title="Me and the Boys" imgUrl="/images/boysmain.jpg" coverColor="#808080" description="Memes, parties and class skipping" />
        </div>
      </Reveal>
      <SpaceSection />
      <Reveal effect="fadeInUp">
        <div>
            <InfoSection title="PEOPLE" id="people-id" />
        </div>
      </Reveal>
      <Reveal effect="fadeInUp">
        <div>
          <TravelCard title="Ahri" imgUrl="/images/ahrimain.jpg" coverColor="#808080" description="Family, Friends and a lot of Alcohol" />
        </div>
      </Reveal>
      <SpaceSection />
      <Reveal effect="fadeInUp">
        <div>
          <TravelCard title="Locked" imgUrl="/images/locked.png" coverColor="#000000" description="Locked" />
        </div>
      </Reveal>
      </div>
    );
  }
}

export default Landing;
