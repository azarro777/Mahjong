import { filledArray } from "../utils/filledArray";
import { getData } from "../reducer/mahjongReducer";

export const fetchData = () => {
  return (dispatch) => {
    try {
      const cards = filledArray().map((element, index) => {
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