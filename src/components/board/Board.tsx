import React, { useEffect, useCallback, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  addToOpenedCards,
  clearOpenedCards,
  notInGame,
  notPlayable,
  playableCard,
  toggleCardSide,
} from "../../reducer/mahjongReducer";
import ICard from "../../utils/interfaces/ICard.interface";
import Card from "../card/Card";
import "./Board.css";

export const Board: FC = (): JSX.Element => {
  const cards = useAppSelector((state) => state.mahjong.cards);
  const openedCards = useAppSelector((state) => state.mahjong.openedCards);
  const dispatch = useAppDispatch();

  useEffect((): void => {
    if (openedCards.length === 2) {
      compareCards();
    }
  }, [openedCards]);

  const cardClickHandler = (id: number): void => {
    const index = cards.findIndex((card) => {
      return card.id === id;
    });
    if (index !== -1 && openedCards.length < 2 && cards[index].isPlayable) {
      dispatch(addToOpenedCards(cards[index]));
      dispatch(toggleCardSide(index));
      dispatch(notPlayable(index));
    }
  };

  const compareCards = (): void => {
    const isCardMatch = openedCards[0].bottomOfCard === openedCards[1].bottomOfCard;
    saveCardsResult(isCardMatch);
  };

  const saveCardsResult = (cardsMatch: boolean): void => {
    if (cardsMatch) {
      setTimeout(() => {
        dispatch(notInGame());
        dispatch(clearOpenedCards());
      }, 500);
    } else {
      const firstCard: ICard | undefined = cards.find((card: ICard) => card.id === openedCards[0].id);
      const secondCard: ICard | undefined = cards.find((card: ICard) => card.id === openedCards[1].id);
      setTimeout(() => {
        if(firstCard !== undefined) {
          dispatch(toggleCardSide(firstCard.id));
          dispatch(playableCard(firstCard));
        }
        if(secondCard !== undefined) {
          dispatch(toggleCardSide(secondCard.id));
          dispatch(playableCard(secondCard));
        }
        
        dispatch(clearOpenedCards());
      }, 500);
    }
  };

  const handleClick = useCallback(
    (id: number): void => {
      cardClickHandler(id);
    },
    [cards, openedCards]
  );

  return (
    <div className='board'>
      <Card cards={cards} handleCallback={(id: number) => handleClick(id)} />
    </div>
  );
};
