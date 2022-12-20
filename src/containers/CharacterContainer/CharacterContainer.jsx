import React from "react";

import CharacterCard from "../../components/CharacterCard/CharacterCard";

import "./CharacterContainer.scss";

const CharacterContainer = ({ charArray }) => {
  const cardArray = charArray.map((character, index) => {
    return <CharacterCard key={index} character={character} />;
  });

  return <div className="character-container">{cardArray}</div>;
};

export default CharacterContainer;
