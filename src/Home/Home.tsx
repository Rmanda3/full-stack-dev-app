import React, { useState } from "react";
import logo from "../logo.svg";
import Navbar from "../Components/Navbar";
import ListItem from "../Components/ListItem/ListItem";
import "./Home.css";
import SideBar from "../Components/Sidebar/Sidebar";

export type Props = {};

const Home: React.FC<Props> = ({}) => {
  const listData = ["one", "two", "three"];

  return (
    <div className="App">
      <Navbar />
      <div className="panels-container">
        <div className="left-pane-container">
          <SideBar />
        </div>
        <div className="main-pane-container">
        {/* {listData.map((itemData) => (
            <ListItem key={itemData} dataItem={itemData} />
          ))} */}
        </div>
        
      </div>
    </div>
  );
};
export default Home;
