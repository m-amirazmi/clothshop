import ReactPaginate from "react-paginate";
import { IPLPListingProps } from "../utils/interfaces";
import { usePagination } from "../hooks/usePagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PLPListingProducts from "./PLPListingProducts";
import PLPListingSort from "./PLPListingSort";
import styles from "../scss/modules/plplisting.module.scss";

const PLPListing: React.FunctionComponent<IPLPListingProps> = ({ products }) => {
	const { currentItems, handlePageClick, pageCount, loading } = usePagination(products);

	return (
		<>
			<PLPListingSort length={products.length} />
			{loading ? <div>Loading products...</div> : currentItems && <PLPListingProducts products={currentItems} />}

			<div className="pagination">
				<ReactPaginate nextLabel={<FiChevronRight />} previousLabel={<FiChevronLeft />} onPageChange={handlePageClick} pageCount={pageCount} />
			</div>
		</>
	);
};

export default PLPListing;
