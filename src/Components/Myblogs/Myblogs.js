import Blogcard from "../Blogcard/Blogcard";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../Blogcard/Blogcard.css";
import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";

export default function Blogcards() {
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  const [posts, setPosts] = useState([]);
  console.log(currentUser);
  useEffect(() => {
    Axios.get(`http://localhost:5000/posts/?name=${currentUser.username}`)
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="allblogspage">
      <div className="cards">
        {posts.map((post) => {
          return (
            <div>
              <Blogcard img={post.file} title={post.title} desc={post.desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
