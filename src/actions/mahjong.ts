import { filledArray } from "../utils/filledArray";
import { getData } from "../reducer/mahjongReducer";
import ICard from "../utils/interfaces/ICard.interface";
import { IActionEnum } from "../utils/types/IAction.type";

export const fetchData = () => {
  return (dispatch: (arg0: { type: IActionEnum; payload: ICard[] }) => void) => {
    try {
      const cards: ICard[] = filledArray().map((element, index) => {
        return {
          id: index,
          topOfCard: "",
          bottomOfCard: element,
          isGame: true,
          isPlayable: true,
          isHeadsUp: true,
        };
      });
      dispatch(getData(cards));
    } catch (error) {
      console.log(error);
    }
  };
};
