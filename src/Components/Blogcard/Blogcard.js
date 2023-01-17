import "./Blogcard.css";
import React, { Component } from "react";

export default function Blogcard({ img, title, desc }) {
  return (
    <div>
      <div className="card">
        <img src={img} alt="" className="blogimg"/>
        <div className="card-body">
          <h2>{title}</h2>
          <p>{desc}</p>
          <p className="likes">10 likes</p>
        </div>
      </div>
    </div>
  );
}
