import React, { useState } from "react";
import './ListItem.css';

export type Props = {
  dataItem:any;
};

const ListItem: React.FC<Props> = (listData:Props) => {
  const [rchecked, serRchecked] = useState(false);
  const handlerDown = (event: React.KeyboardEvent<HTMLInputElement>, rName: string) => {
    console.log("handlerDown->", event.key);
    if (event.key === "F1") {
      serRchecked(true);
      
    event.preventDefault();
    event.stopPropagation()
    }else{
      console.log('else executing')
    }
  };

  const radioHandler = () => {
    console.log("radioHandler->", rchecked);
    // serRchecked(true);
  };
  return (
    <div className="lite-item">
      <div className="radio-container">
        <label>
        <input
          className="radio-box"
          name={listData.dataItem}
          value={listData.dataItem}
          type="radio"
          checked={rchecked}
          aria-selected
          onKeyDown={(e) => handlerDown(e, listData.dataItem)}
          onChange={radioHandler}
        />
        </label>
      </div>
      <div className="lbl-container">
        <span className="radio-lbl">{listData.dataItem}</span>
      </div>
    </div>
  );
};
export default ListItem;
