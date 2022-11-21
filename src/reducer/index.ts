import {configureStore} from "@reduxjs/toolkit";
import mahjongReducer from "./mahjongReducer";

export const store = configureStore({
	reducer: {
		mahjong: mahjongReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;