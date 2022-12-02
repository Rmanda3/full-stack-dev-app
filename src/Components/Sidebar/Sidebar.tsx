import React from "react";
import "./Sidebar.css";

const SideBar: React.FC = () => {
  const sideMenuList = [
    { id: "1001", menuTitle: "Dash Board" },
    { id: "1002", menuTitle: "Members" },
    { id: "1003", menuTitle: "Payments" },
    { id: "1004", menuTitle: "Expenses" },
    { id: "1005", menuTitle: "Services" },
    { id: "1006", menuTitle: "Utility" },
  ];

  return (
    <div className="side-bar-container">
      <ul className="side-bar-list">
        {sideMenuList.map((item) => {
          return (
            <li key={item.id} className="side-bar-list-item">
              {item.menuTitle}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
