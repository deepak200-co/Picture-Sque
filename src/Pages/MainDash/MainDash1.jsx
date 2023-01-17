import React from "react";
import Cards from "../Cards/Cards"
import Table1 from "../Table/Table1"
import "./MainDash.css";
const MainDash1 = () => {
  return (
    <div className="MainDash">
      <h1>Admin portal</h1>
      <Cards />
      <Table1 />
    </div>
  );
};

export default MainDash1;
