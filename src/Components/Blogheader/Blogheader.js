import React from "react";
import "./Blogheader.css";
import Topbar from "../../Components/topbar/Topbar";

export default function Blogheader({title}) {
  return (
    <div>
      <div className="headerbox">
        <div className="topbar">
            <Topbar/>
        </div>
        <div className="quote">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
