import ICard from "../utils/interfaces/ICard.interface";
import IMahjongStateinterface from "../utils/interfaces/IMahjongState.interface";
import { IAction, IActionEnum } from "../utils/types/IAction.type";

const defaultState: IMahjongStateinterface = {
  cards: [],
  openedCards: [],
};

export default function mahjongReducer(
  state = defaultState,
  action: IAction
): IMahjongStateinterface {
  switch (action.type) {
    case IActionEnum.GET_DATA:
      return { ...state, cards: [...action.payload] };
    case IActionEnum.ADD_TO_OPENED_CARDS:
      return { ...state, openedCards: [...state.openedCards, { ...action.payload }] };
    case IActionEnum.NOT_PLAYABLE:
      return {
        ...state,
        cards: [
          ...state.cards.map((el) =>
            el.id === action.payload ? { ...el, isPlayable: false } : el
          ),
        ],
      };
    case IActionEnum.NOT_IN_GAME: {
      return {
        ...state,
        cards: [
          ...state.cards.map((el) =>
            el.id === state.openedCards[0].id
              ? { ...el, isGame: false }
              : el.id === state.openedCards[1].id
              ? { ...el, isGame: false }
              : el
          ),
        ],
      };
    }
    case IActionEnum.CLEAR_OPENED_CARDS: {
      return { ...state, openedCards: [] };
    }
    case IActionEnum.PLAYABLE_CARD: {
      return {
        ...state,
        cards: [
          ...state.cards.map((el) =>
            el.id === action.payload.id ? { ...el, isPlayable: !el.isPlayable } : el
          ),
        ],
      };
    }
    case IActionEnum.TOGGLE_CARD_SIDE: {
      return {
        ...state,
        cards: [
          ...state.cards.map((el) => {
            return el.id === action.payload ? { ...el, isHeadsUp: !el.isHeadsUp } : el;
          }),
        ],
      };
    }
    default:
      return state;
  }
}

export const getData = (data: ICard[]) => ({ type: IActionEnum.GET_DATA, payload: data });
export const addToOpenedCards = (card: ICard) => ({
  type: IActionEnum.ADD_TO_OPENED_CARDS,
  payload: card,
});
export const notPlayable = (index: number) => ({ type: IActionEnum.NOT_PLAYABLE, payload: index });
export const notInGame = () => ({ type: IActionEnum.NOT_IN_GAME });
export const clearOpenedCards = () => ({ type: IActionEnum.CLEAR_OPENED_CARDS });
export const playableCard = (card: ICard) => ({ type: IActionEnum.PLAYABLE_CARD, payload: card });
export const toggleCardSide = (id: number) => ({ type: IActionEnum.TOGGLE_CARD_SIDE, payload: id });
