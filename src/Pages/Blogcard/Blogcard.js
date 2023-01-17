import "./Blogcard.css";
// import React, {  } from "react";
import Axios from "axios";
import React, { useEffect, useState, Component } from "react";

export default function Blogcard({ img, title, desc, id, count }) {
  // const count = 0;
  const [users, setUsers] = useState([]);
  const d = (id) => {
    console.log("function called");
    console.log(id.id);
    try {
      Axios.put(`http://localhost:5000/posts/${id.id}`).then((resp) => {
        let temp = users;
        temp = users.filter((user) => user.id != id);
        setUsers(temp);
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  // console.log(currentUser)
  useEffect(() => {
    Axios.get(`http://localhost:5000/posts`)
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="allcard">
      <img src={img} alt="" />
      <div className="allcard-body">
        <h2>{title}</h2>
        <p>{desc}</p>
        {/* <p>
          <a
            href="#"
            title="Love it"
            class="btn btn-counter multiple-count"
            data-count={count}
            onClick={() => d({ id })}
          >
            <span>&#x2764;</span>
          </a>
        </p> */}
        <h5></h5>
      </div>
    </div>
  );
}
