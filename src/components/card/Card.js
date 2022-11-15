import React from "react";
import {
  compareCardsColor,
  defaultCardColor,
  matchedCardsColor,
} from "../../utils/cardBorderColors";
import "./Card.css";

const Card = (props) => {
  const { cards, handleCallback } = props;

  const card = cards.map((element) => (
    <div
      key={element.id}
      onClick={() => handleCallback(element.id)}
      className='card'
      style={
        !element.isGame
          ? matchedCardsColor()
          : element.isHeadsUp
          ? defaultCardColor()
          : compareCardsColor()
      }
    >
      {!element.isGame ? (
        <h1>{element.bottomOfCard}</h1>
      ) : (
        <h1>{element.isHeadsUp ? element.topOfCard : element.bottomOfCard}</h1>
      )}
    </div>
  ));

  return <>{card}</>;
};

export default React.memo(Card);
