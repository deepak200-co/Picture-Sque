import React from "react";
import Blogheader from "../../Components/Blogheader/Blogheader";
import Blogcards from "../../Components/Blogcards/Blogcards";
import "./blogs.css";

export default function Blogs() {
  return (
    <div className="blogs">
      <div>
        <Blogheader title="BLOGS"/>
      </div>
      <div className="content">
        <center><h1>ALL BLOGS</h1></center>
        <Blogcards />
        {/* <Mostliked /> */}
      </div>
      <div>footer</div>
    </div>
  );
}
