import React, {Component} from 'react';

class Header extends Component{
  render(){
    return(
      <div className="demo-big-content">
        <Layout>
            <Header className="main-img" transparent title="Portfolio" style={{color: 'black'}} scroll>
                <Navigation>
                    <Link to="/resume" style={{color: 'black'}}>Resume</Link>
                    <Link to="/aboutme" style={{color: 'black'}}>About Me</Link>
                    <Link to="/projects" style={{color: 'black'}}>Projects</Link>
                    <Link to="/contacts" style={{color: 'black'}}>Contacts</Link>
                </Navigation>
            </Header>
            <Drawer title="Portfolio">
                <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contacts">Contacts</Link>
                </Navigation>
            </Drawer>
        </Layout>
  </div>
    );
  }
}

export default Header;
