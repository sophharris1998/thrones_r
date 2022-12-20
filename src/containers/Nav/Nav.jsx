import React from "react";
import Checkbox from "../../components/Checkbox/Checkbox";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./Nav.scss";

const Nav = ({ getSearchTerm }) => {
  const SearchBox = () => {
    const getSearchTerm = (event) => {
      console.log(event.target.value);
    };
  };
  return (
    <div className="nav">
      <SearchBox />
      <Checkbox family="Targaryen" />
      <Checkbox family="Stark" />
      <Checkbox family="Lannister" />
      <Checkbox family="Baratheon" />
    </div>
  );
};

export default Nav;
