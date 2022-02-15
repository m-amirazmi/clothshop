import ReactPaginate from "react-paginate";
import { IPLPListingProps } from "../utils/interfaces";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PLPListingProducts from "./PLPListingProducts";
import PLPListingSort from "./PLPListingSort";
import styles from "../scss/modules/plplisting.module.scss";
import { useEffect, useState } from "react";
import { usePagination } from "../hooks/usePagination";
import { useSort } from "../hooks/useSort";

const PLPListing: React.FunctionComponent<IPLPListingProps> = ({ products }) => {
	const { sort, setSort, sortedProducts } = useSort(products);
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
