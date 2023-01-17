import React from "react";
import Blogheader from "../../Components/Blogheader/Blogheader";
import Myblogs from "../../Components/Myblogs/Myblogs";
import "./profile.css";
import { useEffect, useState } from "react";
import Axios from "axios";

export default function Profile() {
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  const [posts, setPosts] = useState([]);
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
    <div className="profile">
      <div>
        <Blogheader title="PROFILE" />
      </div>
      <div className="profilecontent">
        <div>
          <img
            className="profileimg"
            src={posts.length !== 0 ? posts[0].picture : ""}
            alt=""
          />
          <div className="details">
            <h3>{currentUser.username}</h3>
            <h3>{currentUser.email}</h3>
            <h3>{currentUser.phnumber}</h3>
          </div>
        </div>
        <center><br></br>
          <h1>UPLOADS</h1>
        </center>
        <Myblogs />
      </div>
      <div>footer</div>
    </div>
  );
}
