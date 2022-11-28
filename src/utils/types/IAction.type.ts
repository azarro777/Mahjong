import ICard from "../interfaces/ICard.interface";

export type IAction =
  | setGetDataAction
  | setAddToOpenedAction
  | setNotPlayableAction
  | setNotInGameAction
  | setClearOpenedAction
  | setPlayableCardAction
  | setToggleCardAction;

export enum IActionEnum {
  GET_DATA = "GET_DATA",
  ADD_TO_OPENED_CARDS = "ADD_TO_OPENED_CARDS",
  NOT_PLAYABLE = "NOT_PLAYABLE",
  NOT_IN_GAME = "NOT_IN_GAME",
  CLEAR_OPENED_CARDS = "CLEAR_OPENED_CARDS",
  PLAYABLE_CARD = "PLAYABLE_CARD",
  TOGGLE_CARD_SIDE = "TOGGLE_CARD_SIDE",
}

export interface setGetDataAction {
  type: IActionEnum.GET_DATA;
  payload: ICard[];
}

export interface setAddToOpenedAction {
  type: IActionEnum.ADD_TO_OPENED_CARDS;
  payload: ICard;
}

export interface setNotPlayableAction {
  type: IActionEnum.NOT_PLAYABLE;
  payload: number;
}

export interface setNotInGameAction {
  type: IActionEnum.NOT_IN_GAME;
}

export interface setClearOpenedAction {
  type: IActionEnum.CLEAR_OPENED_CARDS;
}

export interface setPlayableCardAction {
  type: IActionEnum.PLAYABLE_CARD;
  payload: ICard;
}

export interface setToggleCardAction {
  type: IActionEnum.TOGGLE_CARD_SIDE;
  payload: number;
}
