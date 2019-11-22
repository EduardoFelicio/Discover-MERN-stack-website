import React from 'react';
import {Link} from 'react-router-dom';

function Footer(){
  return(
    <div className="footer">
      <div className="contain">
        <div className="col">
          <h1>Experiences</h1>
          <ul>
            <Link to="/experiences"><li>Nature</li></Link>
            <Link to="/experiences"><li>Places</li></Link>
            <Link to="/experiences"><li>Tech</li></Link>
          </ul>
        </div>
        <div className="col">
          <h1>Projects</h1>
          <ul>
            <li>Project Foobar</li>
            <li>Project Foobar</li>
            <li>Project Foobar</li>
          </ul>
        </div>
        <div className="col">
          <h1>About me</h1>
          <ul>
            <Link to="/aboutme"><li>Resume</li></Link>
            <Link to="/aboutme"><li>Personal Info</li></Link>
          </ul>
        </div>
        <div className="col">
          <h1>Resources</h1>
          <ul>
            <li>Foobar</li>
            <li>Foobar</li>
          </ul>
        </div>
        <div className="col">
          <h1>Support</h1>
          <ul>
            <Link to="/contacts"><li>Contacts</li></Link>
          </ul>
        </div>
        <div className="col social">
          <h1>Social</h1>
          <ul>
            <a href="https://facebook.com/eduardo.felicio.503"><img src="/images/social/facebook.svg" alt="" className="social-icon"/></a>
            <a href="https://instagram.com/eduardo_felicio98"><img src="/images/social/instagram.svg" alt="" className="social-icon"/></a>
            <a href="https://github.com/EduardoFelicio"><img src="/images/social/github.svg" alt="" className="social-icon"/></a>
          </ul>
        </div>
      <div className="clearfix"></div>
    </div>
</div>
  )
}

export default Footer;
