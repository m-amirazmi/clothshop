import { useEffect, useState } from "react";
import { IProduct } from "../utils/interfaces";

export const useSort = (products: IProduct[]) => {
	const [sort, setSort] = useState<{ id: string; name: string }>();
	const [sortedProducts, setSortedProducts] = useState<IProduct[]>(products);

	useEffect(() => {
		let sortProducts: IProduct[] = [];
		if (sort?.id) {
			sortProducts = [
				...products.sort((a, b): any => {
					if (sort.id === "1") {
						if (a.price > b.price) return 1;
						if (a.price < b.price) return -1;
						else return;
					}
					if (sort.id === "2") {
						if (a.price < b.price) return 1;
						if (a.price > b.price) return -1;
						else return;
					}
					return;
				}),
			];
		} else sortProducts = [...products];

		setSortedProducts(sortProducts);
	}, [sort, products]);

	return { sort, setSort, sortedProducts };
};
