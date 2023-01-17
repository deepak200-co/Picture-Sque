import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  useNavigate ,
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Axios from "axios";
import "./topbar.css";

export default function Topbar() {
  const navigate=useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("current-user"))
  const [posts, setPosts] = useState([]);
  //console.log(currentUser)
  useEffect(() => {
    Axios.get(`http://localhost:5000/users/?email=${currentUser.email}`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="topinblogs">
      <div className="topLeft">
      <img
              className="topImg"
              src={posts.length !== 0 ? posts[0].picture : ''}
              alt=""
            />

      <h3>&nbsp;{currentUser.username}</h3>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/Home">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Allblogs">
              ALLBLOGS
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Profile">
              PROFILE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Write">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Contest">
              CONTEST
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/Contactus">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
      <ul className="topList">
        <Link className="link" to="/">
          LOGOUT
        </Link>
      </ul>
      </div>
    </div>
  );
}
