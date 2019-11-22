import React from 'react';


function TravelCard(props){

  const backgroundStyle = {
  backgroundImage: "url("+props.imgUrl+")",
  width: '100%',
  height: '100%',
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

  const coverStyle = {
    backgroundColor: props.coverColor
  };


  return(
    <div className="travel-section">
      <div style={backgroundStyle} className="travel-image">
        <a href="/experiences">
          <div style={coverStyle} className="cover-travel">
            <p className="travel-title">{props.title}</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default TravelCard;
