import {configureStore} from "@reduxjs/toolkit";
import mahjongReducer from "./mahjongReducer";

export const store = configureStore({
	reducer: {
		mahjong: mahjongReducer
	}
})