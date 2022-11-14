import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToOpenedCards,
  clearOpenedCards,
  notInGame,
  notPlayable,
  playableCard,
  toggleCardSide,
} from "../../reducer/mahjongReducer";
import Card from "../card/Card";
import "./Board.css";

export const Board = () => {
  const cards = useSelector((state) => state.mahjong.cards);
  const openedCards = useSelector((state) => state.mahjong.openedCards);
  const dispatch = useDispatch();

  useEffect(() => {
    if (openedCards.length === 2) {
      compareCards();
    }
  }, [openedCards]);

  const cardClickHandler = (id) => {
    const index = cards.findIndex((card) => {
      return card.id === id;
    });
    if (index !== -1 && openedCards.length < 2 && cards[index].isPlayable) {
      dispatch(addToOpenedCards(cards[index]));
      dispatch(toggleCardSide(index));
      dispatch(notPlayable(index));
    }
  };

  const compareCards = () => {
    const isCardMatch = openedCards[0].bottomOfCard === openedCards[1].bottomOfCard;
    saveCardsResult(isCardMatch);
  };

  const saveCardsResult = (cardsMatch) => {
    if (cardsMatch) {
      setTimeout(() => {
        dispatch(notInGame());
        dispatch(clearOpenedCards());
      }, 500);
    } else {
      const firstCard = cards.find((card) => card.id === openedCards[0].id);
      const secondCard = cards.find((card) => card.id === openedCards[1].id);
      setTimeout(() => {
        dispatch(toggleCardSide(firstCard.id));
        dispatch(playableCard(firstCard));
        dispatch(toggleCardSide(secondCard.id));
        dispatch(playableCard(secondCard));
        dispatch(clearOpenedCards());
      }, 500);
    }
  };

  const handleClick = useCallback((id) => {
    cardClickHandler(id);
  });

  return (
    <div className='board'>
      <Card cards={cards} handleCallback={(value) => handleClick(value)} />
    </div>
  );
};