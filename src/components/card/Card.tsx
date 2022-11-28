import React from "react";
import { JsxAttribute } from "typescript";
import {
  compareCardsColor,
  defaultCardColor,
  matchedCardsColor,
} from "../../utils/cardBorderColors";
import IBoardProps from "../../utils/interfaces/IBoardProps.interface";
import "./Card.css";

const Card = (props: IBoardProps): JSX.Element => {
  const { cards, handleCallback } = props;

  const card: React.ReactElement[] = cards.map((element) => (
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
