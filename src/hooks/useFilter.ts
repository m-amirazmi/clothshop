import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IProduct } from "../utils/interfaces";

export const useFilter = (products: IProduct[]) => {
	const [filtered, setFiltered] = useState<IProduct[]>([]);
	const { brands, categories } = useSelector((state: RootState) => state.filter);

	useEffect(() => {
		setFiltered([
			...products.filter((item) => {
				if (brands.length !== 0 && categories.length !== 0) return brands.includes(item.brand) && categories.includes(item.category);
				else if (brands.length === 0 && categories.length !== 0) return categories.includes(item.category);
				else if (brands.length !== 0 && categories.length === 0) return brands.includes(item.brand);
				else return item;
			}),
		]);
	}, [products, brands, categories]);

	return { filtered };
};
