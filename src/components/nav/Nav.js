import React from "react";

function Nav() {
  return (
    <div className="nav">
      <span className="material-symbols-outlined arrow-left">
        arrow_back_ios_new
      </span>
      <span className="material-symbols-outlined arrow-right">
        arrow_forward_ios
      </span>
      <div className="account"> Account </div>
    </div>
  );
}

export default Nav;
