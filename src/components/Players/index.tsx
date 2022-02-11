import React from "react";
import { PlayerText } from "./styles";

interface PlayerProps {
  playerName: string;
}

const Player: React.FC<PlayerProps> = ({ playerName }) => {
  return <PlayerText> {playerName} </PlayerText>;
};

export default Player;
