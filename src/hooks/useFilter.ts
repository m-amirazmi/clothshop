import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../redux/store";
import { IProduct } from "../utils/interfaces";

export const useFilter = (products: IProduct[]) => {
	const [filtered, setFiltered] = useState<IProduct[]>([]);
	const { brands, categories, price } = useSelector((state: RootState) => state.filter);
	const { currency } = useSelector((state: RootState) => state.currency);

	useEffect(() => {
		setFiltered([
			...products
				.filter((item) => {
					const netPrice = item.discount ? item.price - item.price * item.discount : item.price;
					const currencyRated = netPrice * currency.rate;
					if (currencyRated > price.min && currencyRated < price.max) return item;
				})
				.filter((item) => {
					if (brands.length !== 0 && categories.length !== 0) return brands.includes(item.brand) && categories.includes(item.category);
					else if (brands.length === 0 && categories.length !== 0) return categories.includes(item.category);
					else if (brands.length !== 0 && categories.length === 0) return brands.includes(item.brand);
					else return item;
				}),
		]);
	}, [products, brands, categories, price]);

	return { filtered };
};
