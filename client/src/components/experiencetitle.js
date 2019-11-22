import React from 'react';

var title,  atual="random string";

function ExperienceTitle(props){
  if(props.title!==atual){
    if(!props.title) title="Everything";
    else if(props.title==="all") title="Everything";
    else if(props.title==="hiking") title="Hiking";
    else if(props.title==="snow") title="Snow";
    else if(props.title==="paris") title="Paris";
    else if(props.title==="university") title="University";
    else if(props.title==="tech") title="Tech";
    atual = props.title;
}
  return(
    <div>
      <p className="experience-title">{title}</p>
    </div>
  )
}

export default ExperienceTitle;
