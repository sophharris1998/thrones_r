import React from "react";
import "./CheckBox.scss";

const CheckBox = ({ family }) => {
  return (
    <div>
      <label htmlfor={family}>{family}</label>
      <input type="checkbox" name={family} id={family} />
    </div>
  );
};

export default CheckBox;
