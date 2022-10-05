import {filledArray} from '../utils/filledArray';
import { getData } from '../reducer/mahjongReducer';


export const fetchData = (interval) => {
	return dispatch => {
		try {
			dispatch(getData(filledArray()));
		} catch (error) {
			console.log(error);
		}
	}
};