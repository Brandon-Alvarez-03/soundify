import React from "react";

function Links(props) {
  return (
    <div className="link-box">
      <div className="line">
        <i className="material-symbols-outlined">{props.icon1} </i>
        <p className="icon-description">{props.description1}</p>
      </div>
      <div className="line">
        <i className="material-symbols-outlined">{props.icon2} </i>
        <p className="icon-description">{props.description2}</p>
      </div>
      <div className="line">
        <i className="material-symbols-outlined">{props.icon3} </i>
        <p className="icon-description">{props.description3}</p>
      </div>
    </div>
  );
}

export default Links;
