import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPLPState, IProduct } from "../../utils/interfaces";

const initialState: IPLPState = {
	loading: false,
	products: [
		{
			brand: "",
			category: "",
			discount: 0,
			id: "",
			image: "",
			isPopular: false,
			name: "",
			price: 0,
			rating: 0,
		},
	],
};

export const plpSlice = createSlice({
	name: "plp",
	initialState,
	reducers: {
		plpPending: (state) => {
			state.loading = true;
			state.products = [
				{
					brand: "",
					category: "",
					discount: 0,
					id: "",
					image: "",
					isPopular: false,
					name: "",
					price: 0,
					rating: 0,
				},
			];
		},
		plpSetProducts: (state, { payload }: PayloadAction<IProduct[]>) => {
			state.products = payload;
			state.loading = false;
		},
	},
});

export const { plpPending, plpSetProducts } = plpSlice.actions;
export default plpSlice.reducer;
