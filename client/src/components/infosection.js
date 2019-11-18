import React from 'react';

function InfoSection(props){
  return(
    <div className="info-section" id={props.id}>
      <p className="section-title">{props.title}</p>
      <div className="divider div-transparent div-arrow-down"></div>
    </div>
  )
}

export default InfoSection;
