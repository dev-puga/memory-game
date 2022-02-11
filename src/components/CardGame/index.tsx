import { useEffect, useState } from "react";
import Player from "../Players";
import { CardContent, Container } from "./styles";

const CardGame: React.FC = () => {
  const [viewCard, setViewCard] = useState<any[]>([]);
  const [matchedPair, setMatchedPair] = useState<any[]>([]);
  // const [openModal, setOpenModal] = useState<Boolean>(false);

  const cards = [
    { id: 1, fruit: "src/images/banana.svg" },
    { id: 2, fruit: "src/images/apple.svg" },
    { id: 3, fruit: "src/images/cherries.svg" },
  ];

  const pairCards = [...cards, ...cards];

  const handleFlipCard = (index: number) => {
    setViewCard((view: any) => [...view, index]);
  };

  useEffect(() => {
    if ((viewCard as any) < 2) return;

    const firstMatched = pairCards[viewCard[0]];
    const secondMatched = pairCards[viewCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatchedPair([...matchedPair, firstMatched.id]);
    }
    if (viewCard.length === 2) {
      setTimeout(() => setViewCard([]), 500);
    }
  }, [viewCard]);

  // if (matchedPair.length === cards.length) {
  //   setOpenModal(true);
  // }

  return (
    <>
      <Player playerName="Player1" />
      <Player playerName="Player2" />
      <Container>
        {pairCards.map((card, idx) => {
          let isViewed = false;

          if (viewCard.includes(idx)) isViewed = true;
          if (matchedPair.includes(card.id)) isViewed = true;

          return (
            <CardContent key={idx} onClick={() => handleFlipCard(idx)}>
              {!isViewed ? (
                <img src="src/images/question_mark.svg" alt="questionLogo" />
              ) : (
                <img src={card.fruit} alt="memory game" />
              )}
            </CardContent>
          );
        })}
        {/* {openModal ? alert("PARABÉNS VC VENCEU") : ""} */}
      </Container>
    </>
  );
};

export default CardGame;
