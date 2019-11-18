import React from 'react';

var title,  atual="random string";

function ExperienceTitle(props){
  if(props.title!=atual){
    if(!props.title) title="Everything";
    else if(props.title=="all") title="Everything";
    else if(props.title=="thailand") title="Thailand";
    else if(props.title=="paris") title="Paris";
    else if(props.title=="pirates") title="House of Pirates";
    else if(props.title=="boys") title="Boys";
    else if(props.title=="latada") title="Latada";
    else if(props.title=="ahri") title="Ahri";
    else if(props.title=="locked") title="Locked";
    atual = props.title;
}
  return(
    <div>
      <p className="experience-title">{title}</p>
    </div>
  )
}

export default ExperienceTitle;
