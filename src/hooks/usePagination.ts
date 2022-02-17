import { useEffect, useState } from "react";
import { IProduct } from "../utils/interfaces";

export const usePagination = (products: IProduct[]) => {
	const [currentItems, setCurrentItems] = useState<IProduct[]>();
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const [itemsPerPage, setItemsPerPage] = useState(40);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const endOffset = itemOffset + itemsPerPage;
		const sliced = products.slice(itemOffset, endOffset);

		setCurrentItems(sliced);
		setPageCount(Math.ceil(products.length / itemsPerPage));
		setLoading(false);
	}, [itemOffset, itemsPerPage, products]);

	const handlePageClick = (event: any) => {
		const newOffset = (event.selected * itemsPerPage) % products.length;
		setItemOffset(newOffset);
	};

	return { handlePageClick, currentItems, pageCount, loading };
};
