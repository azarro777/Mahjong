const GET_DATA = "GET_DATA";
const ADD_TO_OPENED_CARDS = "ADD_TO_OPENED_CARDS";
const NOT_PLAYABLE = "NOT_PLAYABLE";
const NOT_IN_GAME = "NOT_IN_GAME";
const CLEAR_OPENED_CARDS = "CLEAR_OPENED_CARDS";
const PLAYABLE_CARD = "PLAYABLE_CARD";
const TOGGLE_CARD_SIDE = "TOGGLE_CARD_SIDE";

const defaultState = {
  cards: [],
  openedCards: [],
};

export default function mahjongReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, cards: [...action.payload] };
    case ADD_TO_OPENED_CARDS:
      return { ...state, openedCards: [...state.openedCards, { ...action.payload }] };
    case NOT_PLAYABLE:
      return {
        ...state,
        cards: [
          ...state.cards.map((el) =>
            el.id === action.payload ? { ...el, isPlayable: false } : el
          ),
        ],
      };
    case NOT_IN_GAME: {
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
    case CLEAR_OPENED_CARDS: {
      return { ...state, openedCards: [] };
    }
    case PLAYABLE_CARD: {
      return {
        ...state,
        cards: [
          ...state.cards.map((el) =>
            el.id === action.payload.id ? { ...el, isPlayable: !el.isPlayable } : el
          ),
        ],
      };
    }
    case TOGGLE_CARD_SIDE: {
      return {
        ...state,
        cards: [
          ...state.cards.map((el) =>
            el.id === action.payload ? { ...el, isHeadsUp: !el.isHeadsUp } : el
          ),
        ],
      };
    }
    default:
      return state;
  }
}

export const getData = (data) => ({ type: GET_DATA, payload: data });
export const addToOpenedCards = (card) => ({ type: ADD_TO_OPENED_CARDS, payload: card });
export const notPlayable = (index) => ({ type: NOT_PLAYABLE, payload: index });
export const notInGame = () => ({ type: NOT_IN_GAME });
export const clearOpenedCards = () => ({ type: CLEAR_OPENED_CARDS });
export const playableCard = (card) => ({ type: PLAYABLE_CARD, payload: card });
export const toggleCardSide = (card) => ({ type: TOGGLE_CARD_SIDE, payload: card });
