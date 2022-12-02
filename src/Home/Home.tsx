import React, { useState } from "react";
import logo from "../logo.svg";
import Navbar from "../Components/Navbar";
import ListItem from "../Components/ListItem/ListItem";
import "./Home.css";

export type Props = {};

const Home: React.FC<Props> = ({}) => {
  const listData = ["one", "two", "three"];

  return (
    <div className="App">
      <Navbar />
      <div className="panels-container">
        <div className="left-pane-container">
          <form>
            <label>
              Name1: <input type="radio" />
            </label>
            <label>
              Name2: <input type="radio" />
            </label>
            <label>
              Name3: <input type="radio" />
            </label>
            <label>
              Name4: <input type="radio" />
            </label>
          </form>
        </div>
        <div className="main-pane-container"></div>
        <div className="right-pane-container">
          {listData.map((itemData) => (
            <ListItem dataItem={itemData} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
