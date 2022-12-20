import "./App.css";
import { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import CharacterContainer from "./containers/CharacterContainer/CharacterContainer";
import Nav from "./containers/Nav/Nav";

const App = () => {
  const [charArray, setCharArray] = useState([]);
  const [showCharacters, setShowCharacters] = useState(false);
  const getCharacters = async () => {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const data = await response.json();
    console.log(data);
    setCharArray(data);
  };

  //page load
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="App">
      <Nav />
      <CharacterContainer charArray={charArray} />
    </div>
  );
};

export default App;
