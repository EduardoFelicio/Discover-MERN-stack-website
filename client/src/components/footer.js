import React from 'react';

function Footer(){
  return(
    <div className="footer">
      <div className="contain">
        <div className="col">
          <h1>Experiences</h1>
          <ul>
            <li>Abroad</li>
            <li>University</li>
            <li>People</li>
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
            <li>Resume</li>
            <li>Personal Info</li>
          </ul>
        </div>
        <div className="col">
          <h1>Resources</h1>
          <ul>
            <li>Foobar</li>
            <li>Foobar</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="col">
          <h1>Support</h1>
          <ul>
            <li>Contacts</li>
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
