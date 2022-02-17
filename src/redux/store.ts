import { configureStore } from "@reduxjs/toolkit";
import currencySlice from "./features/currencySlice";
import plpFilterSlice from "./features/plpFilterSlice";
import plpSlice from "./features/plpSlice";

export const store = configureStore({
	reducer: {
		currency: currencySlice,
		filter: plpFilterSlice,
		plp: plpSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
