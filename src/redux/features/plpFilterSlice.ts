import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPLPFilterState, IProduct } from "../../utils/interfaces";

const initialState: IPLPFilterState = {
	price: {
		min: 0,
		max: 10000,
	},
	initialCategories: [],
	initialBrands: [],
	categories: [],
	brands: [],
};

export const plpFilterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		filterInitial: (state, { payload }: PayloadAction<IProduct[]>) => {
			const extractCategories: string[] = [];
			const extractBrands: string[] = [];
			payload.forEach((item) => {
				if (extractCategories.includes(item.category)) return;
				extractCategories.push(item.category);
			});
			payload.forEach((item) => {
				if (extractBrands.includes(item.brand)) return;
				extractBrands.push(item.brand);
			});
			state.initialCategories = extractCategories;
			state.initialBrands = extractBrands;
		},
		categoriesSetSelected: (state, { payload }: PayloadAction<string>) => {
			if (!state.categories.includes(payload)) state.categories.push(payload);
			else {
				const copy = [...state.categories];
				const remove = copy.filter((i) => i !== payload);
				state.categories = remove;
			}
		},
		categoriesRemoveAll: (state) => {
			state.categories = [];
		},
		brandsSetSelected: (state, { payload }: PayloadAction<string>) => {
			if (!state.brands.includes(payload)) state.brands.push(payload);
			else {
				const copy = [...state.brands];
				const remove = copy.filter((i) => i !== payload);
				state.brands = remove;
			}
		},
		brandsRemoveAll: (state) => {
			state.brands = [];
		},
		priceSet: (state, { payload }: PayloadAction<{ min: number; max: number }>) => {
			state.price = payload;
		},
	},
});

export const { filterInitial, categoriesSetSelected, brandsSetSelected, categoriesRemoveAll, brandsRemoveAll, priceSet } = plpFilterSlice.actions;
export default plpFilterSlice.reducer;
