import Blogcard from "../Blogcard/Blogcard";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../Blogcard/Blogcard.css";
// import Topbar from "../topbar/Topbar";

export default function Blogcards() {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("current-user"))
  );
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:5000/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="allblogs">
      <div className="cards">
        {posts.map((post) => {
          return (
            <div>
              <div>
                <Blogcard img={post.file} title={post.title} desc={post.desc} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
