import ReactPaginate from "react-paginate";
import { IPLPListingProps, IProduct } from "../utils/interfaces";
import { usePagination } from "../hooks/usePagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PLPListingProducts from "./PLPListingProducts";
import PLPListingSort from "./PLPListingSort";
import styles from "../scss/modules/plplisting.module.scss";
import { useEffect, useState } from "react";

const PLPListing: React.FunctionComponent<IPLPListingProps> = ({ products }) => {
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
	}, [sort]);

	const { currentItems, handlePageClick, pageCount, loading } = usePagination(sortedProducts);

	return (
		<>
			<PLPListingSort length={products.length} setSort={setSort} sort={sort} />
			{loading ? <div>Loading products...</div> : currentItems && <PLPListingProducts products={currentItems} />}

			<div className="pagination">
				<ReactPaginate nextLabel={<FiChevronRight />} previousLabel={<FiChevronLeft />} onPageChange={handlePageClick} pageCount={pageCount} />
			</div>
		</>
	);
};

export default PLPListing;
