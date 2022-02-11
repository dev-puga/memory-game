import { useState } from "react";
import Player from "../Players";
import { Card, Container } from "./styles";

const CardGame: React.FC = () => {
  const [viewFirstCard, setViewFirstCard] = useState(false);
  const [viewSecondCard, setViewSecondCard] = useState(false);

  const handleFirstCardClick = () => {
    if (!viewFirstCard) {
      setViewFirstCard(true);
    }
    if (viewFirstCard) setViewFirstCard(false);
  };

  const handleSecondCardClick = () => {
    if (!viewSecondCard) {
      setViewSecondCard(true);
    }
    if (viewSecondCard) setViewSecondCard(false);
  };

  return (
    <>
      <Player playerName="Player1" />
      <Player playerName="Player2" />
      <Container>
        <Card onClick={handleFirstCardClick}>
          {!viewFirstCard ? (
            <img src="src/images/question_mark.svg" alt="questionLogo" />
          ) : (
            <img src="src/images/banana.svg" alt="bananaImg" />
          )}
        </Card>
        <Card onClick={handleSecondCardClick}>
          {!viewSecondCard ? (
            <img src="src/images/question_mark.svg" alt="questionLogo" />
          ) : (
            <img src="src/images/apple.svg" alt="appleImg" />
          )}
        </Card>

        <Card onClick={handleSecondCardClick}>
          {!viewSecondCard ? (
            <img src="src/images/question_mark.svg" alt="questionLogo" />
          ) : (
            <img src="src/images/apple.svg" alt="appleImg" />
          )}
        </Card>

        <Card onClick={handleSecondCardClick}>
          {!viewSecondCard ? (
            <img src="src/images/question_mark.svg" alt="questionLogo" />
          ) : (
            <img src="src/images/apple.svg" alt="appleImg" />
          )}
        </Card>

        <Card onClick={handleSecondCardClick}>
          {!viewSecondCard ? (
            <img src="src/images/question_mark.svg" alt="questionLogo" />
          ) : (
            <img src="src/images/apple.svg" alt="appleImg" />
          )}
        </Card>

        <Card onClick={handleSecondCardClick}>
          {!viewSecondCard ? (
            <img src="src/images/question_mark.svg" alt="questionLogo" />
          ) : (
            <img src="src/images/apple.svg" alt="appleImg" />
          )}
        </Card>
      </Container>
    </>
  );
};

export default CardGame;
