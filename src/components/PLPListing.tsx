import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PLPListingProducts from "./PLPListingProducts";
import PLPListingSort from "./PLPListingSort";
import styles from "../scss/modules/plplisting.module.scss";
import { usePagination } from "../hooks/usePagination";
import { useSort } from "../hooks/useSort";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useFilter } from "../hooks/useFilter";

const PLPListing: React.FunctionComponent = () => {
	const { products } = useSelector((state: RootState) => state.plp);
	const { sort, setSort, sortedProducts } = useSort(products);
	const { filtered } = useFilter(sortedProducts);

	const { currentItems, handlePageClick, pageCount, loading } = usePagination(filtered);

	return (
		<>
			<PLPListingSort length={filtered.length} setSort={setSort} sort={sort} />
			{loading ? <div>Loading products...</div> : currentItems && <PLPListingProducts products={currentItems} />}

			<div className="pagination">
				<ReactPaginate nextLabel={<FiChevronRight />} previousLabel={<FiChevronLeft />} onPageChange={handlePageClick} pageCount={pageCount} />
			</div>
		</>
	);
};

export default PLPListing;
