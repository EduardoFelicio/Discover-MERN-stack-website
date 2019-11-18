import React, {Component} from 'react';
import ImageLoader from './imageloader';
import Reveal from 'react-reveal/Reveal';
import TabMenuExperiences from './tabmenuexperiences';
import SpaceSection from './space';
import Gallery from './gallery';
import ExperienceTitle from './experiencetitle';
import {Grid, Cell} from 'react-mdl';

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
            <Grid>
              <Cell col={3}>
              </Cell>
              <Cell col={6}>
                <ExperienceTitle title={this.state.tag} />
              </Cell>
              <Cell col={3}>
                <Gallery tag={this.state.tag} />
              </Cell>
            </Grid>
            <Reveal effect="fadeInUp">
              <ImageLoader tag={this.state.tag}/>
            </Reveal>
            <SpaceSection />
          </div>
        )
    };
}

export default Travels;
