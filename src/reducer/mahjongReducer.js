const GET_DATA = "GET_DATA";
const SET_CLICKED_NUMS = "SET_CLICKED_NUMS";

const defaultState = {
  numbers: [],
  prevClickedNum: '',
  clickedNum: '',
};

export default function mahjongReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, numbers: [...action.payload] };
    case SET_CLICKED_NUMS: 
      return { ...state, prevClickedNum: state.clickedNum, clickedNum: action.payload};
    default:
      return state;
  }
}

export const getData = (data) => ({ type: GET_DATA, payload: data });
export const setClickedNums = (num) => ({type: SET_CLICKED_NUMS, payload: num});
